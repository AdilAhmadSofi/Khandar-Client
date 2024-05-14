import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MemberBasicDetailsResponse } from 'src/app/Models/member';
import { TeamMemberRequest } from 'src/app/Models/teamMember';
import { MemberService } from 'src/app/Services/member.service';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-add-team-member',
  templateUrl: './add-team-member.component.html',
  styleUrls: ['./add-team-member.component.css']
})
export class AddTeamMemberComponent implements OnInit {
  teamId!:string
  teamMemberRequest= new TeamMemberRequest();
  teamMembers:MemberBasicDetailsResponse[]=[];
  showLoader = false;
  constructor(private memberService:MemberService, private toastr:ToastrService,
    private teamService : TeamService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(response)=>{
        this.teamId= response['id'];
      }
    });
    this.getAllMembers();
  }


  assignMember(){
    this.showLoader = true;
this.teamMemberRequest.teamId=this.teamId;
    this.teamService.addTeamMember(this.teamMemberRequest).subscribe(
      {
        next: (response) => {
          this.toastr.success(response.message);

          this.showLoader = false;
        },
        error: (err) => {
          this.toastr.error(err.error.message);
          this.showLoader = false;
        },
      }
    )
  }


  getAllMembers(){
    this.showLoader = true;

    this.memberService.getAllMembersBasicDetails().subscribe(
      {
        next: (response) => {
          this.teamMembers = response.result;
          this.showLoader = false;
        },
        error: (err) => {
          this.toastr.error(err.error.message);
          this.showLoader = false;
        },
      }
    )
  }

}

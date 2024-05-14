import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeamMemberInfoResponse, TeamMemberResponse } from 'src/app/Models/teamMember';
import { TeamService } from 'src/app/Services/team.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {
  teamId = "";
  showLoader = false;
  teamMembers: TeamMemberInfoResponse[] = [];
  baseUrl=environment.baseUrl
  constructor(private toastr: ToastrService,
    private teamService: TeamService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (response) => {
        this.teamId = response['id'];
      }
    });
    this.getAllTeamMembers();
  }

  getAllTeamMembers() {
    this.teamService.getAllTeamsMembers(this.teamId).subscribe({
      next: (response) => {
        this.teamMembers = response.result;
      },
      error: (err) => {
        this.toastr.error(err.error.message);
        this.showLoader = false;
      }
    });
  }

}

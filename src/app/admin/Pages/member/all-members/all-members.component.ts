import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MemberResponse } from 'src/app/Models/member';
import { MemberService } from 'src/app/Services/member.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.css']
})
export class AllMembersComponent implements OnInit {
  memberResponses :MemberResponse[]=[];
  baseUrl=environment.baseUrl;
  constructor(private memberService : MemberService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.getAllMembers();
  }


  getAllMembers(){
    this.memberService.getAllMembers().subscribe({
      next:(response)=>{

        this.memberResponses = response.result;

      },
      error:(err) =>{
         console.log(err.error.message)
         
      },
    })
  }


  deleteMember(id:string)
  {
    environment
    .fireConfirmSwal('Are you sure You Want to Delete this member?')
    .then((result) => {

      if (result.isConfirmed) {
        this.memberService.deleteMembers(id).subscribe({
          next:(response)=>{
           this.toastr.success(response.message)
           this.getAllMembers();
          },
          error:(err) =>{
             console.log(err.error.message)
          },
        })
      }
    });
    
  }

}

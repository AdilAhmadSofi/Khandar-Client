import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MemberResponse } from 'src/app/Models/member';
import { MemberService } from 'src/app/Services/member.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  memberResponse! :MemberResponse;
  id ='';
  baseUrl=environment.baseUrl;
  constructor(private memberService : MemberService, 
    private toastr : ToastrService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(res)=>{
        this.id=res['id'];
      },
      error:()=>{}
    })
    this.getMemberById();
  }


  getMemberById(){
    this.memberService.getMemberById(this.id).subscribe({
      next:(response)=>{

        this.memberResponse = response.result;
        console.log(this.memberResponse)
      },
      error:(err) =>{
         console.log(err.error.message)
         
      },
    })
  }
}
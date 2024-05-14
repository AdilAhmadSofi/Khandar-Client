import { Component, OnInit } from '@angular/core';
import { MemberResponse } from 'src/app/Models/member';
import { MemberService } from 'src/app/Services/member.service';
import { SharedService } from 'src/app/Services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  memberResponse! : MemberResponse;
  baseUrl=environment.baseUrl;

  constructor(public sharedService:SharedService, private memberService : MemberService) { }
  ngOnInit(): void {
  this.getMemberById();
  }

  getMemberById(){
    this.memberService.getMemberById().subscribe({
      next:(res)=>{
        
        this.memberResponse =res.result;
    sessionStorage.setItem('teamId',res.result.teamId);
    sessionStorage.setItem('memberType', res.result.memberType.toString());

      }
    })
  }
}

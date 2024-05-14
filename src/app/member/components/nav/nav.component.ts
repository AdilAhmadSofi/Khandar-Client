import { Component, OnInit } from '@angular/core';
import { LoggedInCredentials } from 'src/app/Models/loggedInCredentials';
import { MemberResponse } from 'src/app/Models/member';
import { MemberService } from 'src/app/Services/member.service';
import { SharedService } from 'src/app/Services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  localObj:LoggedInCredentials|null=new LoggedInCredentials();
  memberResponse! : MemberResponse;
  basePath = environment.baseUrl;
  constructor(public sharedService:SharedService, private memberService : MemberService) { }
  ngOnInit(): void {
  this.localObj=this.sharedService.getLocalObject();
  this.getMemberById();
  }

  
  getMemberById(){
    this.memberService.getMemberById().subscribe({
      next:(res)=>{
        console.log(res);
        
        this.memberResponse =res.result;
    sessionStorage.setItem('teamId',res.result.teamId);
    sessionStorage.setItem('memberType', res.result.memberType.toString());

      }
    })
  }
}

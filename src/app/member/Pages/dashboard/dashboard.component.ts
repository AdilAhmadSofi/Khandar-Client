import { Component, OnDestroy, OnInit } from '@angular/core';
import { DonationAppealStatus } from 'src/app/Enums/donationAppealStatus';
import { AppealResponse } from 'src/app/Models/donationAppeal';
import { MemberResponse } from 'src/app/Models/member';
import { TeamResponse } from 'src/app/Models/team';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';
import { MemberService } from 'src/app/Services/member.service';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  appeals : AppealResponse[]=[];
  teams : TeamResponse[]=[];
  memberResponses :MemberResponse[]=[];
  
  totalAppeals=0;
  totalTeams=0;
  totalMembers=0;
  totalPendingAppeals=0;
  totalApprovedAppeals=0;
  totalCompletedAppeals=0;
  totalPartnerseekers=0;
  totalTransactionAmount=0;
  
  teamId='';
  role=''

  constructor(private teamService: TeamService, 
    private donationAppealService : DonationAppealService,
    private memberService : MemberService, private partnerSeekers:PartnerSeekerService,
    ) {}
  



    ngOnInit(): void {
      this.teamId=sessionStorage.getItem('teamId')!;
      this.role=sessionStorage.getItem('memberType')!;
      this.getMemberTotalAppeals();
      this.getAllTeams();
      this.getAllMembers();
      this.getTotalPartnerseekers();
    }

    getMemberById(){
      this.memberService.getMemberById().subscribe({
        next:(res)=>{
            this.teamId=res.result.teamId;
            this.role=res.result.memberType.toString();
  
        }
      })
    }

  getMemberTotalAppeals(){
    this.donationAppealService.getMemberTotalAppeals(this.teamId).subscribe(
      {
        next: (response) => {
          this.totalAppeals = response.result.length;
        }
      }
    );

    this.donationAppealService.getTeamTotalAppeals(this.teamId, DonationAppealStatus.Pending).subscribe(
      {
        next: (response) => {
          this.totalPendingAppeals = response;
        }
      }
    );

    this.donationAppealService.getTeamTotalAppeals(this.teamId, DonationAppealStatus.Approved).subscribe(
      {
        next: (response) => {
          this.totalApprovedAppeals = response;
        }
      }
    );


    this.donationAppealService.getTeamTotalAppeals(this.teamId, DonationAppealStatus.Completed).subscribe(
      {
        next: (response) => {
          this.totalCompletedAppeals = response;
        }
      }
    );
  }




  getAllTeams(){
    this.teamService.getAllTeams().subscribe(
      {
        next: (response) => {
          this.teams = response.result;
          this.totalTeams=response.result.length;
        }
      }
    )
  }

  getAllMembers(){
    this.memberService.getTotalMembers().subscribe({
      next:(response)=>{
        this.totalMembers = response;
      }
    })
  }

  getTotalPartnerseekers(){
    this.partnerSeekers.getTotalPartnerseekers().subscribe({
      next:(response)=>{
        this.totalPartnerseekers = response;
      }
    })
  }


  ngOnDestroy(): void {
    
   }
}

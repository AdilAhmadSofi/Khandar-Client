import { Component, OnInit } from '@angular/core';
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
export class DashboardComponent implements OnInit {
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
  
  constructor(private teamService: TeamService, 
    private donationAppealService : DonationAppealService,
    private memberService : MemberService, private partnerSeekers:PartnerSeekerService,
    ) {}



    ngOnInit(): void {
      this.getAllDonationAppeal();
      this.getAllTeams();
      this.getAllMembers();
      this.getTotalTransactionAmount();
      this.getTotalPartnerseekers();
    }


  getAllDonationAppeal(){
    this.donationAppealService.getAllDonationAppeal().subscribe(
      {
        next: (response) => {
          this.totalAppeals = response.result.length;
        }
      }
    );
   
    this.donationAppealService.getTotalAppeals(DonationAppealStatus.Pending).subscribe(
      {
        next: (response) => {
          this.totalPendingAppeals = response;
        }
      }
    );

    this.donationAppealService.getTotalAppeals(DonationAppealStatus.Approved).subscribe(
      {
        next: (response) => {
          this.totalApprovedAppeals = response;
        }
      }
    );


    this.donationAppealService.getTotalAppeals(DonationAppealStatus.Completed).subscribe(
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
    this.partnerSeekers.getAllPartnerSeekers().subscribe({
      next:(response)=>{
        this.totalPartnerseekers = response.result.length;
      }
    })
  }

  getTotalTransactionAmount(){
    this.donationAppealService.getTotalTransactionAmount().subscribe({
      next:(response)=>{
        this.totalTransactionAmount = response;
      }
    })
  }


  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BeneficiaryDetailsResponse } from 'src/app/Models/beneficiaryDetails';
import { AppealResponse } from 'src/app/Models/donationAppeal';
import { TeamResponse } from 'src/app/Models/team';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';
import { TeamService } from 'src/app/Services/team.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-donation-appeals',
  templateUrl: './donation-appeals.component.html',
  styleUrls: ['./donation-appeals.component.css']
})
export class DonationAppealsComponent implements OnInit {
  showLoader = false;
  appeals : AppealResponse[]=[];
  baseUrl = environment.baseUrl;
  teams : TeamResponse[]=[];
  beneficiary = new  BeneficiaryDetailsResponse();
  teamId="";
  role="";
  constructor(private teamService: TeamService, private toastr: ToastrService,
     private donationAppealService : DonationAppealService, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(response)=>{
          this.teamId=response["id"];
          this.role=response['role'];
      }
    })
    console.log(this.teamId)
    this.getMyTeamDonationAppeal();
  }


  getMyTeamDonationAppeal(){
    this.donationAppealService.getMyTeamDonationAppeals(this.teamId).subscribe(
      {
        next: (response) => {
          this.appeals = response.result;
          console.log(this.appeals)
          this.showLoader = false;
        },

        error: (err) => {
          this.toastr.error(err.error.message)
          this.showLoader = false
        },
      }
    )
  }


  getAppealsByStatus(event:Event){
    let element=event.target as HTMLSelectElement;
    let val=element.value;
    if(val =='-1'){
      this.toastr.error("Select Status");
    }
    else if(val == '0'){
      this.getMyTeamDonationAppeal();
    }
    else{
      this.donationAppealService.getMyTeamDonationAppealsByStatus(this.teamId,val).subscribe(
        {
          next: (response) => {
            this.appeals = response.result;
            this.showLoader = false;
          },
  
          error: (err) => {
            this.toastr.error(err.error.message);
            this.appeals=[];
            this.showLoader = false;
          },
        }
      )
    }
   
  }


  beneficiaryDetails(id:string){
    this.donationAppealService.getBeneficiaryDetails(id).subscribe(
      {
        next: (response) => {
          this.beneficiary = response.result;
          this.showLoader = false;
        },

        error: (err) => {
          this.toastr.error(err.error.message)
          this.showLoader = false
        },
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DonationAppealStatus } from 'src/app/Enums/donationAppealStatus';
import { BeneficiaryDetailsResponse } from 'src/app/Models/beneficiaryDetails';
import { AppealResponse } from 'src/app/Models/donationAppeal';
import { TeamResponse } from 'src/app/Models/team';
import { TeamAssignmentRequest } from 'src/app/Models/teamAssignment';
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
  model=new TeamAssignmentRequest();
  beneficiary = new  BeneficiaryDetailsResponse();
  constructor(private teamService: TeamService, private toastr: ToastrService,
     private donationAppealService : DonationAppealService) { }


  ngOnInit(): void {
    this.getAllDonationAppeal();
    this.getAllTeams();
  }


  getAllDonationAppeal(){
    this.donationAppealService.getAllDonationAppeal().subscribe(
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


  getAllTeams(){
    this.teamService.getAllTeams().subscribe(
      {
        next: (response) => {
          this.teams = response.result;
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
    else if(val =='0'){
      this.getAllDonationAppeal();
    }
    else{
      this.donationAppealService.getAllDonationAppealByStatus(val).subscribe(
        {
          next: (response) => {
            this.appeals = response.result;
            this.showLoader = false;
          },
  
          error: (err) => {
            this.toastr.error(err.error.message)
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

  // assignTeam(teamId:string,appealId:string,teamName:string)
  assignTeam(appealId:string,event:any)
  {
    
    let model =new TeamAssignmentRequest();
    model.appealId=appealId;
    model.teamId=event.target.value;
    if(event.target.value ==''){
      this.toastr.error("Please Select Team");
    }
    else{
      environment.fireConfirmSwal(`Are you sure you want  team`).then(result=>{

        if(result.isConfirmed){
          
      this.teamService.assignTeam(model).subscribe(
        {
          next: (response) => {
            // this.teams = response.result;
            this.toastr.success(response.message)
            this.showLoader = false;
            this.getAllDonationAppeal();
          },
  
          error: (err) => {
            this.toastr.error(err.error.message);
            this.showLoader = false
          },
        }
      )
        }
      })
    }
  }
}

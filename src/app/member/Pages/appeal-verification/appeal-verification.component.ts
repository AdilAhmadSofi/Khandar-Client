import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppealMemberVerificationResponse, AppealVerificationRequest, AppealVerificationResponse } from 'src/app/Models/appealVerification';
import { LoggedInCredentials } from 'src/app/Models/loggedInCredentials';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-appeal-verification',
  templateUrl: './appeal-verification.component.html',
  styleUrls: ['./appeal-verification.component.css']
})
export class AppealVerificationComponent implements OnInit {
 model = new AppealVerificationRequest();
//  appealVerificationResponse!: AppealMemberVerificationResponse; 
 appealVerificationResponses: AppealMemberVerificationResponse[]=[]; 
 loggedInCredentials= new LoggedInCredentials();
 teamAssignmentId ='';
 role='';
  constructor(private activatedRoute : ActivatedRoute , 
    private donationAppealService: DonationAppealService,
    private toastr: ToastrService, private sharedServive:SharedService) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(response)=>{
        this.teamAssignmentId = response['id'];
        this.role=response['role']
      }
    });
    this.loggedInCredentials = <LoggedInCredentials> this.sharedServive.getLocalObject();
    // this.getMyVerification();
    this.getAllVerification();
  }

  submitVerification(){

    this.model.teamAssignmentId = this.teamAssignmentId;
    console.log(this.model)
    this.donationAppealService.addVerificationAppeal(this.model).subscribe({
      next:(res) =>{
        this.toastr.success(res.message);
        this.getAllVerification();
      },
      error:(err) =>{
        this.toastr.error(err.error.message);
      }
    })


  }


  getMyVerification(){
    this.donationAppealService.getMemberVerification(this.teamAssignmentId).subscribe({
      next:(res) =>{
        //this.appealVerificationResponse=res.result;
      },
      error:(err) =>{
        this.toastr.error(err.error.message);
      }
    })

  }

  getAllVerification(){
    this.donationAppealService.getAllVerifications(this.teamAssignmentId).subscribe({
      next:(res) =>{
        this.appealVerificationResponses=res.result;
      },
      error:(err) =>{
        this.toastr.error(err.error.message);
      }
    })

  }

}

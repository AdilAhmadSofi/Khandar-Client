import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DonationAppealStatus } from 'src/app/Enums/donationAppealStatus';
import { AppealMemberVerificationResponse, AppealVerificationRequest } from 'src/app/Models/appealVerification';
import { UpdateAppealStatusRequest } from 'src/app/Models/donationAppeal';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-appeal-verification',
  templateUrl: './appeal-verification.component.html',
  styleUrls: ['./appeal-verification.component.css']
})
export class AppealVerificationComponent implements OnInit {

 appealVerificationResponses: AppealMemberVerificationResponse[]=[]; 
 teamAssignmentId ='';
 appealId='';
  constructor(private activatedRoute : ActivatedRoute , 
    private donationAppealService: DonationAppealService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(response)=>{
        this.teamAssignmentId = response['teamAssignmentId'];
        this.appealId = response['appealId'];
      }
    })
    this.getMyVerification();
  }

  


  getMyVerification(){
    this.donationAppealService.getAllVerifications(this.teamAssignmentId).subscribe({
      next:(res) =>{
        this.appealVerificationResponses=res.result;
      },
      error:(err) =>{
        this.toastr.error(err.error.message);
      }
    })

  }

  submitVerificationStatus(status:any){
    let model= new UpdateAppealStatusRequest();
    model.appealId=this.appealId,
    model.donationAppealStatus=Number(status)
  console.log(model)
    environment.fireConfirmSwal("Are you sure you want to submit the varification status").then(result=>{
      if(result.isConfirmed){
        this.donationAppealService.updateDonationAppealStatus(model).subscribe(
          {
            next: (response) => {
              //  this.showLoader = false;
               this.toastr.success(response.message);
               this.getMyVerification();
            },
            error: (err) => {
              this.toastr.error(err.error.message)
              // this.showLoader = false
            },
          }
        )
      }
     })
  }

}

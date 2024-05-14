import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DonationAppealResponse, UpdateAppealRequest } from 'src/app/Models/donationAppeal';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-appeal',
  templateUrl: './my-appeal.component.html',
  styleUrls: ['./my-appeal.component.css']
})
export class MyAppealComponent implements OnInit {
  model!:UpdateAppealRequest;
  appeals: DonationAppealResponse[]=[];
  baseUrl = environment.baseUrl;
  showLoader = false;
  showUpdateForm = false;
  constructor(private donationAppealService: DonationAppealService,private toastr:ToastrService) { }


  ngOnInit(): void {
    this.getMyDonationAppeal();
  }

  getMyDonationAppeal(){
    this.donationAppealService.getMyDonationAppeal().subscribe(
      {
        next: (response) => {
          this.appeals = response.result;
          this.showLoader = false;
        },

        error: (err) => {
          this.toastr.error(err.error.message)
          this.showLoader = false
        },
      }
    )
  }


  showEditForm(appealId:string, amount:number, description:string){
    this.model=new UpdateAppealRequest();
    this.model.appealId=appealId;
    this.model.amount=amount;
    this.model.description=description;
    this.showUpdateForm = true
  }

  hideForm(){
    this.showUpdateForm = false
  }
  
  submitAppeal(event:Event){
    let myform = event.target as HTMLFormElement
    let form = new FormData(myform);
   // form.append("appealId",this.modal.appealId)
    this.showLoader = true;
    this.donationAppealService.updateDonationAppeal(form).subscribe(
      {
        next: (response) => {
           this.appeals = response.result;
           this.showLoader = false;
           this.showUpdateForm=false;
        },
        error: (err) => {
          this.toastr.error(err.error.message)
          this.showLoader = false
        },
      }
    )
  }


  cancelAppeal(appealId:string){
     environment.fireConfirmSwal("Are you sure you want to cancel the appeal").then(result=>{
      if(result.isConfirmed){
        this.donationAppealService.cancelDonationAppeal(appealId).subscribe(
          {
            next: (response) => {
               this.showLoader = false;
               this.toastr.success(response.message);
               this.getMyDonationAppeal();
            },
            error: (err) => {
              this.toastr.error(err.error.message)
              this.showLoader = false
            },
          }
        )
      }
     })
  }
}

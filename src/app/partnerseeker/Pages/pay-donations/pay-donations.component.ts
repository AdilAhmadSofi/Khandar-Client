import { HttpStatusCode } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppOrderRequest, AppOrderResponse } from 'src/app/Models/appOrder';
import { BeneficiaryDetailsResponse } from 'src/app/Models/beneficiaryDetails';
import { AppealResponse } from 'src/app/Models/donationAppeal';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';
import { environment } from 'src/environments/environment';
declare var Razorpay: any;

@Component({
  selector: 'app-pay-donations',
  templateUrl: './pay-donations.component.html',
  styleUrls: ['./pay-donations.component.css']
})
export class PayDonationsComponent implements OnInit {

  
  showLoader = false;
  appeals : AppealResponse[]=[];
  baseUrl = environment.baseUrl;
  beneficiary = new  BeneficiaryDetailsResponse();
  appOrderRequest = new AppOrderRequest();
  appOrderResponse!:AppOrderResponse;

  appealId = '';

  constructor( private toastr: ToastrService,
    private donationAppealService : DonationAppealService,
    ) { }


    ngOnInit(): void {
      this.getAllDonationAppeal();
    }




  getAllDonationAppeal(){
    this.donationAppealService.getAllApprovedDonationAppeal().subscribe(
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


  setAppealId(id:string)
  {
    this.appealId = id;
  }







  options = {
    // May Get RazorPayKey from Backend api which is much safer
    key: environment.razorPayKey,
    amount:0,
    currency: 'INR',
    name: 'Khandar',
    description:'',
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bikatadventures.com%2FHome%2FItinerary%2Fkashmir-great-lakes-trek&psig=AOvVaw3MYSOgV1zj8lwD_Mk8kYfi&ust=1694954929506000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDsuqeVr4EDFQAAAAAdAAAAABAD',
    order_id:  '',

   "handler":function (response:any){
    var event= new CustomEvent("payment.success",{detail:response,bubbles:true,cancelable:true});
    window.dispatchEvent(event);
   },

    prefill: {
      //using the prefill parameter to auto-fill customer's contact information, especially their phone number
      name: '',
      email: '',
      contact: '',
    },
    notes: {
      address: '',
    },
    theme: {
      color: '#3399cc',
    },
  };
  donateNow(appealId:string, amount:string){
    if(amount == ''){
      this.toastr.error("Please Enter Amount To Pay")
    }else{

    this.appOrderRequest.appealId = appealId;
    this.appOrderRequest.amount = Number(amount);
    this.donationAppealService.payDonation(this.appOrderRequest).subscribe({
      next: (response) => {
        this.showLoader = false;
       if(!response.isSuccess){
        if(response.statusCode === HttpStatusCode.AlreadyReported){
          environment.fireErrorSwal('Payment already done')
        }
        return;
       }
       this.appOrderResponse=response.result;
        this.options.amount=this.appOrderResponse.amount;
        this.options.description= this.appOrderResponse.description;
        this.options.order_id=this.appOrderResponse.orderId;

        this.options.prefill.name= this.appOrderResponse.name;
        this.options.prefill.email= this.appOrderResponse.email;
        this.options.prefill.contact= this.appOrderResponse.contact;

        this.options.notes.address=this.appOrderResponse.address;

       this.payNow();
      },
      error: (err) => {
        console.log(err);
        this.showLoader = false;
      },
    });
  }

  }
  payNow() {
    let rzp1=new Razorpay(this.options);
    rzp1.open()
    rzp1.on('payment.error',function(response:any){
    })
  }


  @HostListener('window:payment.success',['$event'])
  onPaymentSuccess(response:any):void{
    let data=response.detail;
     let paymentOptions={
      razorpay_payment_id : data.razorpay_payment_id,
      razorpay_order_id:   data.razorpay_order_id,
      razorpay_signature:  data.razorpay_signature
     }
     this.donationAppealService.CapturePaymentDetails(paymentOptions).subscribe(res=>{
      environment.fireSuccessSwal("Payment done Successfully")
     })
  }


}


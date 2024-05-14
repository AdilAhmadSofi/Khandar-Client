import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRole } from 'src/app/Enums/userRole';
import { TransactionResponse } from 'src/app/Models/transaction';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';

@Component({
  selector: 'app-appeal-transactions',
  templateUrl: './appeal-transactions.component.html',
  styleUrls: ['./appeal-transactions.component.css']
})
export class AppealTransactionsComponent implements OnInit {
  appealtotalAmount=0;

  asOfNowDate='';
  fromDate = '';
  toDate = '';
 usrRole=UserRole;
 appealId = '';
  transactionResponse:TransactionResponse[]=[];
  constructor(private donationService:DonationAppealService,
     private toastr:ToastrService,
     private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(response)=>{
        this.appealId=response['appealId'];
      }
    })
    this.getAllTransactionsByAppeal();

  }


  asOfNowFun(val:any){
    this.asOfNowDate = val;
    this.donationService.getAllTransactionsAsOfNow(val).subscribe({
      next:(response)=>{
        this.transactionResponse = response.result;
        this.getTotalAmount();
       
      },
      error:(err)=>{
        this.transactionResponse=[];
        this.toastr.error(err.error.message)
      }
    })
  }


  fromDateFun(val:any){
    this.fromDate = val;
  }

  toDateFun(val:any){
    if(this.fromDate!='')
    {
      this.donationService.getAllTransactionsByDateRange(this.fromDate,val).subscribe({
        next:(response)=>{
          this.transactionResponse = response.result;
          this.getTotalAmount();
        },
        error:(err)=>{
          this.transactionResponse=[];
          this.toastr.error(err.error.message)
        }
      })
    }
    else this.toastr.warning("Please Select From Date");
    
  }

  getAllTransactionsByAppeal()
  {
      this.donationService.getAllTransactionsByAppealId(this.appealId).subscribe({
        next:(response)=>{
            this.transactionResponse= response.result;
            this.getTotalAmount();
        },
        error:(err)=>{
          this.toastr.error(err.error.message);
        }
      });
  }

  getTotalAmount(){
    this.appealtotalAmount=0;
    for(let trans of this.transactionResponse){
      this.appealtotalAmount+= trans.paidAmount!;
    }
  }
}

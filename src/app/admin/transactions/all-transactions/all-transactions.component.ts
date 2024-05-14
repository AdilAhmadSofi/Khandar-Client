import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserRole } from 'src/app/Enums/userRole';
import { TransactionResponse } from 'src/app/Models/transaction';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent implements OnInit {
 totalTransactionAmount=0;
  asOfNowDate='';
  fromDate = '';
  toDate = '';
 usrRole=UserRole;
  transactionResponse:TransactionResponse[]=[];
  constructor(private donationService:DonationAppealService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllTransactions();

  }


  asOfNowFun(val:any){
    this.asOfNowDate = val;
    this.totalTransactionAmount=0;
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

  getAllTransactions()
  {
      this.donationService.getAllTransactions().subscribe({
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
    this.totalTransactionAmount=0;
    for(let trans of this.transactionResponse){
      this.totalTransactionAmount+= trans.paidAmount!;
    }
  }
}

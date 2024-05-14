import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRole } from 'src/app/Enums/userRole';
import { MyTransactionResponse } from 'src/app/Models/transaction';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.css']
})
export class MyTransactionsComponent implements OnInit {

  asOfNowDate='';
  fromDate = '';
  toDate = '';
 userId = '';
  transactionResponse:MyTransactionResponse[]=[];
  constructor(private donationService:DonationAppealService,
     private toastr:ToastrService,
     private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(response)=>{
        if(response['id'])
        this.userId=response['id'];
      console.log(this.userId)
      }
    })
    this.getMyTransactions();

  }

  
  getMyTransactions()
  {
      this.donationService.getMyTransactions(this.userId).subscribe({
        next:(response)=>{
            this.transactionResponse= response.result
        },
        error:(err)=>{
          this.toastr.error(err.error.message);
        }
      });
  }
}


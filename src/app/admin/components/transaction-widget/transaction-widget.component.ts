import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserRole } from 'src/app/Enums/userRole';
import { TransactionResponse } from 'src/app/Models/transaction';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';

@Component({
  selector: 'app-transaction-widget',
  templateUrl: './transaction-widget.component.html',
  styleUrls: ['./transaction-widget.component.css']
})
export class TransactionWidgetComponent implements OnInit {
  @Input()appealtotalAmount=0;
  usrRole=UserRole;
  @Input()transactionResponse:TransactionResponse[]=[];
  constructor(private donationService:DonationAppealService, private toastr:ToastrService) { }

  ngOnInit(): void {
    // this.getAllTransactions();

  }


  asOfNowFun(val:any){
    alert(val)
  }


  fromDateFun(val:any){
    alert(val)
  }

  toDateFun(val:any){
    alert(val)
  }

  // getAllTransactions()
  // {
  //     this.donationService.getAllTransactions().subscribe({
  //       next:(response)=>{
  //           this.transactionResponse= response.result
  //       },
  //       error:(err)=>{
  //         this.toastr.error(err.error.message);
  //       }
  //     });
  // }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BeneficiaryDetailsResponse } from 'src/app/Models/beneficiaryDetails';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
id='';
userDetailResponse!:BeneficiaryDetailsResponse;
  constructor(private donationAppealService:DonationAppealService, private activatedRoute:ActivatedRoute,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(res)=>{
        this.id = res['id']
      }
    });
    this.userDetails();
  }


  userDetails(){
    this.donationAppealService.getBeneficiaryDetails(this.id).subscribe(
      {
        next: (response) => {
          this.userDetailResponse = response.result;
          console.log(response.result)
          // this.showLoader = false;
        },

        error: (err) => {
          this.toastr.error(err.error.message)
          // this.showLoader = false
        },
      }
    )
  }
}

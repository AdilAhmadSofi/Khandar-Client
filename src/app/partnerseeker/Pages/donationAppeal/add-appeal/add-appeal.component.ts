import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DonationAppealRequest } from 'src/app/Models/donationAppeal';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';

@Component({
  selector: 'app-add-appeal',
  templateUrl: './add-appeal.component.html',
  styleUrls: ['./add-appeal.component.css']
})
export class AddAppealComponent implements OnInit {
  modal= new DonationAppealRequest();
  showLoader=false;
  isChecked=false;

  
  constructor(private donationAppealService: DonationAppealService,
    private toastr:ToastrService,
    ) { }

  ngOnInit(): void {
  }

  checkIsPublic(){
    this.isChecked=!this.isChecked;
  }
  submitAppeal(event:Event){
    let myform = event.target as HTMLFormElement;
    let form = new FormData(myform);
    this.showLoader = true;
    this.donationAppealService.addDonationAppeal(form).subscribe(
      {
        next: (response) => {

          this.toastr.success(response.message);

          this.showLoader = false;
        },
        error: (err) => {
          this.toastr.error(err.error.message)
          this.showLoader = false
        },
      }
    )
  }
  }



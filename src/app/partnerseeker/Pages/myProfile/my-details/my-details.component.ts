import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/Enums/gender';
import { LoggedInCredentials } from 'src/app/Models/loggedInCredentials';
import { PartnerSeekerResponse } from 'src/app/Models/partnerSeeker';
import { AccountService } from 'src/app/Services/account.service';
import { AddressService } from 'src/app/Services/address.service';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';
import { SharedService } from 'src/app/Services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  // partnerSeekerRequest:PartnerSeekerRequest =new  PartnerSeekerRequest();
  maleGender=Gender.Male;
  partnerSeekerResponse=new PartnerSeekerResponse()
 imageBaseUrl=environment.baseUrl;

  localObj: LoggedInCredentials | null = new LoggedInCredentials();
  Id: string | null = localStorage.getItem('EKhander_Id');
  constructor(public sharedService: SharedService, private addressService:AddressService,private AuthService: AccountService,private parnerSeekerService:PartnerSeekerService) { }
  ngOnInit(): void {
    this.getMyProfile();
    this.localObj = this.sharedService.getLocalObject();


  }


  getMyProfile(){
    this.parnerSeekerService.getMyProfile().subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.partnerSeekerResponse=response.result;
        //  environment.fireSuccessSwal(response.message)
        }
      },
      error:(err)=>{

      }
     })
  }
}

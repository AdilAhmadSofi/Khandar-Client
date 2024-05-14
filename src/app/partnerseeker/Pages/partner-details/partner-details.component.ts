import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressResponse } from 'src/app/Models/address';
import { hobbyResponse } from 'src/app/Models/hobby';
import { JobHistoryResponse } from 'src/app/Models/jobHistory';
import { AppearanceInfoResponse, FamilyInfoResponse, PartnerSeekerResponse, PersonalInfoResponse, ProfessionalInfoResponse, ReligiousInfoResponse } from 'src/app/Models/partnerSeeker';
import { qualificationResponse } from 'src/app/Models/qualification';
import { socialMediaResponse } from 'src/app/Models/socialMedia';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.component.html',
  styleUrls: ['./partner-details.component.css']
})
export class PartnerDetailsComponent implements OnInit {
  personalInfoResponse=new PersonalInfoResponse();
  familyInfoResponse= new FamilyInfoResponse();
  appearanceInfoResponse= new AppearanceInfoResponse();
  religiousInfoResponse = new ReligiousInfoResponse();
  professionalInfoResponse = new ProfessionalInfoResponse();
  qualifications:qualificationResponse[]=[];
  hobbies:hobbyResponse[]=[];
  addresses:AddressResponse[]=[];
  jobHistories:JobHistoryResponse[]=[];
  socialMedia:socialMediaResponse[]=[];
  imageBaseUrl=environment.baseUrl;
  recieverId!:string;
  constructor(private partnerSeekerService:PartnerSeekerService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(response)=>{
        this.recieverId= response['id'];
      }
    })
    this.getPartnerPersonalInfo();
    this.getPartnerAppearance();
    this.getPartnerReligious();
    this.getPartnerProfessional();
    this.getPartnerHobbies();
    this.getPartnerJobHistories();
    this.getPartnerSocialMedias();
  }

  getPartnerPersonalInfo(){
    this.partnerSeekerService.getPartnerPersonalInfo(this.recieverId).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.personalInfoResponse=response.result;
        //  environment.fireSuccessSwal(response.message)
        }
      },
      error:(err)=>{

      }
     })
  }

  getPartnerReligious(){
    this.partnerSeekerService.getPartnerReligious(this.recieverId).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.religiousInfoResponse=response.result;
        //  environment.fireSuccessSwal(response.message)
        }
      },
      error:(err)=>{

      }
     })
  }

  getPartnerAppearance(){
    this.partnerSeekerService.getPartnerAppearance(this.recieverId).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.appearanceInfoResponse=response.result;
        //  environment.fireSuccessSwal(response.message)
        }
      },
      error:(err)=>{

      }
     })
  }

  getPartnerFamily(){
    this.partnerSeekerService.getPartnerFamily(this.recieverId).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.familyInfoResponse=response.result;
        //  environment.fireSuccessSwal(response.message)
        }
      },
      error:(err)=>{

      }
     })
  }


  getPartnerProfessional(){
    this.partnerSeekerService.getPartnerProfessional(this.recieverId).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.professionalInfoResponse=response.result;
        //  environment.fireSuccessSwal(response.message)
        }
      },
      error:(err)=>{

      }
     })
  }

  getPartnerQualification(){
    this.partnerSeekerService.getPartnerQualification(this.recieverId).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.qualifications=response.result;
        //  environment.fireSuccessSwal(response.message)
        }
      },
      error:(err)=>{

      }
     })
  }

  getPartnerHobbies(){
    this.partnerSeekerService.getPartnerHobbies(this.recieverId).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.hobbies=response.result;
        //  environment.fireSuccessSwal(response.message)
        }
      },
      error:(err)=>{

      }
     })
  }

  getPartnerJobHistories(){
    this.partnerSeekerService.getPartnerJobHistories(this.recieverId).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.jobHistories=response.result;
        //  environment.fireSuccessSwal(response.message)
        }
      },
      error:(err)=>{

      }
     })
  }

  getPartnerSocialMedias(){
    this.partnerSeekerService.getPartnerSocialMedia(this.recieverId).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.socialMedia=response.result;
        //  environment.fireSuccessSwal(response.message)
        }
      },
      error:(err)=>{

      }
     })
  }

  getPartnerAddresses(){
    this.partnerSeekerService.getPartnerAddresses(this.recieverId).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.addresses=response.result;
        //  environment.fireSuccessSwal(response.message)
        }
      },
      error:(err)=>{

      }
     })
  }

}

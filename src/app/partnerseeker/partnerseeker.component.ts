import { Component, OnInit } from '@angular/core';
import { GenericService } from '../Services/generic.service';
import { BasicProfileResponse } from '../Models/partnerSeeker';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-partnerseeker',
  templateUrl: './partnerseeker.component.html',
  styleUrls: ['./partnerseeker.component.css']
})
export class PartnerseekerComponent implements OnInit {
  fileBasePath=environment.baseUrl;

  basicProfileResponse!:BasicProfileResponse;
  constructor(private genericService:GenericService) { }

  ngOnInit(): void {
      this.getProfile();
  }

  getProfile(){
    this.genericService.Find<BasicProfileResponse>("partnerSeekers/profile").subscribe({
      next:(response)=>{
        this.basicProfileResponse=response.result;
        // localStorage.setItem(
        //   'EKhander_Token_Profile',
        //   JSON.stringify(response.result)
        // );
      },
      error:(err)=>{}
    });
  }
}

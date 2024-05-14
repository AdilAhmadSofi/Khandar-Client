import { Component, OnInit } from '@angular/core';
import { BasicProfileResponse } from 'src/app/Models/partnerSeeker';
import { SharedService } from 'src/app/Services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  length: number = 0;
  basicProfileResponse:BasicProfileResponse=new BasicProfileResponse();
  fileBasePath=environment.baseUrl;
  constructor(private sharedService:SharedService){}
  ngOnInit(): void {
    this.basicProfileResponse=<BasicProfileResponse>this.sharedService.getProfileLocalObject();
  }

  getServices() {
   // this.Router.navigate(['/admin/services']);
  }
}

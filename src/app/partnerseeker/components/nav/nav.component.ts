import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInCredentials } from 'src/app/Models/loggedInCredentials';
import { BasicProfileResponse } from 'src/app/Models/partnerSeeker';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';
import { SharedService } from 'src/app/Services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

   localObj:LoggedInCredentials|null=new LoggedInCredentials();
  
   baseUrl=environment.baseUrl;
 basicProfileResponse:BasicProfileResponse=new BasicProfileResponse();
  fileBasePath=environment.baseUrl;
  constructor( public sharedService:SharedService ,private router:Router, private partnerseekerService:PartnerSeekerService) { }
  ngOnInit(): void {
    this.partnerseekerService.getLoddedInBasicDetails().subscribe({
      next:(response)=>{
        this.basicProfileResponse=response.result
      }
    })
    this.basicProfileResponse=<BasicProfileResponse>this.sharedService.getProfileLocalObject();
  this.localObj=this.sharedService.getLocalObject();
  }
//   logout(){
//     localStorage.removeItem("emed-token");
//     this.router.navigate(['/login'])
//  }
// offcanvas=false;
// @HostListener('window', ['$event.target'])
// onClick(x:any) {
//   let y =  x as Window
//   y.document.body.removeClass('offcanvas-backdrop fade show')
// }


}

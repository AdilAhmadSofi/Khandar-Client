import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { socialMediaRequest } from 'src/app/Models/socialMedia';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';

@Component({
  selector: 'app-add-socialmedia',
  templateUrl: './add-socialmedia.component.html',
  styleUrls: ['./add-socialmedia.component.css']
})
export class AddSocialmediaComponent implements OnInit {

  showLoader=false;
  socialMedia:socialMediaRequest=new socialMediaRequest();
  status:boolean=true;
  constructor(private service:PartnerSeekerService, private toastr:ToastrService, private router : Router) { }

  ngOnInit(): void {
  }
  submitSocialMedia(){
    this.showLoader=true;
    this.socialMedia.name=Number(this.socialMedia.name);
    this.service.addSocialMedia(this.socialMedia).subscribe({
      next:(response)=>
      { 
        this.showLoader=false;
         if(response.isSuccess){
          this.status=true
          this.toastr.success(response.message);
          this.router.navigate(["/partnerseeker/socialMedias"]);
      }
    },
      error:(err)=>{
        this.showLoader=false;
        this.toastr.error(err.error.message)}
      })
   
  }
}
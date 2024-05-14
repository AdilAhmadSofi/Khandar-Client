import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { socialMediaResponse } from 'src/app/Models/socialMedia';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  showLoader=false;
  socialMedias:socialMediaResponse[]=[];
  status:boolean=true;
  constructor(private service:PartnerSeekerService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getMySocialMedias();
  }
  getMySocialMedias(){
    this.showLoader=true;
    this.service.getMySocialMedias().subscribe({
      next:(response)=>
      { 
        this.showLoader=false;
         if(response.isSuccess){
          this.status=false
         this.socialMedias = response.result;
      }
    },
      error:(err)=>{
        this.showLoader=false;
        this.toastr.error(err.error.message)}
      })   
  }
  
  deleteSocialMedia(id:string){
    this.service.deleteSocialMedia(id).subscribe({
      next:(res)=>{
          this.toastr.success(res.message);
          this.getMySocialMedias();
      },
      error:(err)=>{
          this.toastr.error(err.error.message);
      }
    })
  }
}
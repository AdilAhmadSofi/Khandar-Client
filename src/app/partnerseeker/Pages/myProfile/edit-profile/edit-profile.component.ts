import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gender } from 'src/app/Enums/gender';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';
import { environment } from 'src/environments/environment';
import { PartnerSeekerRequest, PartnerSeekerResponse } from 'src/app/Models/partnerSeeker';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  partnerSeekerRequest:PartnerSeekerRequest =new  PartnerSeekerRequest();
  maleGender=Gender.Male;
  showLoader = false;
  partnerSeekerResponse=new PartnerSeekerResponse()
file!:any;
  constructor(private parnerSeekerService:PartnerSeekerService,
    private router:Router, private taostr : ToastrService) { }


  ngOnInit(): void {
    this.getMyProfile();
  }

 

  getMyProfile(){
    this.parnerSeekerService.getMyProfile().subscribe({
      next:(response)=>{
        if(response.isSuccess){
          //this.partnerSeekerRequest=<PartnerSeekerResponse>response.result;
          this.partnerSeekerRequest=response.result;
          this.partnerSeekerRequest.dob= new Date(response.result.dob!).toISOString().split('T')[0] ;
        }
      },
      error:(err)=>{

      }
     })
  }

  checkFileType(file:any){
    this.file=file[0];
    //this.isImageFormatInValid = true;
    // if (file.length > 0) {
    //   if (this.extensions.includes(file[0].type.toLowerCase())) {
    //     this.isImageFormatInValid = false;
    //   } else {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: 'Image Format is invalid!',
    //     })
    //     this.isImageFormatInValid = true;
    //   }
    // } else {
    //   this.isImageFormatInValid = true;
    // }
  }
  updatePartnerSeeker(updateForm:any): void {
    this.showLoader= true;
   const myForm = new FormData(updateForm.target);
  //  for (let [key, value] of Object.entries(form)) {
  //    myForm.append(key, value as string);
  //  }
   myForm.append("id", this.partnerSeekerRequest.id);
  // myForm.append("file",this.file);

     this.parnerSeekerService.UpdatePartnerSeeker(myForm).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.partnerSeekerResponse=response.result;
          this.taostr.success(response.message);
          this.router.navigate(["/partnerseeker/myProfile"])
        }
        this.showLoader = false;
      },
      error:(err)=>{
        this.taostr.error(err.error.message);
        this.showLoader = false;
      }
     })
  }
}

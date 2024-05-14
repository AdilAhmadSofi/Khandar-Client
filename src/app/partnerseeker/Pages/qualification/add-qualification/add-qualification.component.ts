import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { qualificationRequest } from 'src/app/Models/qualification';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';

@Component({
  selector: 'app-add-qualification',
  templateUrl: './add-qualification.component.html',
  styleUrls: ['./add-qualification.component.css']
})
export class AddQualificationComponent implements OnInit {

  showLoader=false;
  Qualification:qualificationRequest=new qualificationRequest();
  status:boolean=true;
  constructor(private service:PartnerSeekerService, private toastr:ToastrService, private router : Router) { }

  ngOnInit(): void {
  }
  submitQualification(){
    this.showLoader=true;
    this.Qualification.qualificationType=Number(this.Qualification.qualificationType);
    this.service.addQualification(this.Qualification).subscribe({

      next:(response)=>
      { 
        this.showLoader=false;
         if(response.isSuccess){
          this.status=true
          this.toastr.success(response.message);
          this.router.navigate(["/partnerseeker/qualifications"]);
      }
    },
      error:(err)=>{
        this.showLoader=false;
        this.toastr.error(err.error.message)}
      })
   
  }
}


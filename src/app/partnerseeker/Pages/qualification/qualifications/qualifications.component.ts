import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { qualificationRequest, qualificationResponse } from 'src/app/Models/qualification';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent implements OnInit {
  showLoader=false;
  qualifications:qualificationResponse[]=[];
  status:boolean=true;
  constructor(private service:PartnerSeekerService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getMyQualifications();
  }
  getMyQualifications(){
    this.showLoader=true;
    this.service.getMyQualifications().subscribe({
      next:(response)=>
      { 
        this.showLoader=false;
         if(response.isSuccess){
        this.status=false
        this.qualifications=response.result;
      }
    },
      error:(err)=>{
        this.showLoader=false;
        this.toastr.error(err.error.message)}
      })
   
  }

  deleteQualification(id:string){
    this.service.deleteQualification(id).subscribe({
      next:(res)=>{
          this.toastr.success(res.message);
          this.getMyQualifications();
      },
      error:(err)=>{
          this.toastr.error(err.error.message);
      }
    })
  }
}


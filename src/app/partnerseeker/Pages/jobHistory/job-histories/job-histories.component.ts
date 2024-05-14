import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobHistoryResponse } from 'src/app/Models/jobHistory';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';

@Component({
  selector: 'app-job-histories',
  templateUrl: './job-histories.component.html',
  styleUrls: ['./job-histories.component.css']
})
export class JobHistoriesComponent implements OnInit {

  showLoader=false;
  jobHistories:JobHistoryResponse[]=[];
  constructor(private service:PartnerSeekerService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getMyJobHistories();
  }
  getMyJobHistories(){
    this.showLoader=true;
    this.service.getMyJobHistories().subscribe({

      next:(response)=>
      { 
        this.showLoader=false;
         if(response.isSuccess){
     this.jobHistories =response.result;
      }
    },
      error:(err)=>{
        this.showLoader=false;
        this.toastr.error(err.error.message)}
      })
   
  }

  deleteJobHistories(id:string){
    this.service.deleteJobHistory(id).subscribe({
      next:(res)=>{
          this.toastr.success(res.message);
          this.getMyJobHistories();
      },
      error:(err)=>{
          this.toastr.error(err.error.message);
      }
    })
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobHistoryRequest } from 'src/app/Models/jobHistory';
import { AccountService } from 'src/app/Services/account.service';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-job-history',
  templateUrl: './add-job-history.component.html',
  styleUrls: ['./add-job-history.component.css']
})
export class AddJobHistoryComponent implements OnInit {

  constructor( private service:PartnerSeekerService, private taostr : ToastrService,private router: Router) { }
  Job:JobHistoryRequest = new JobHistoryRequest();
  showLoader=false
    ngOnInit(): void {
    }
    submitJob(){
      this.showLoader= true;
      this.service.addJobHistory(this.Job).subscribe({

        next:(response)=>
        { 
          this.showLoader=false;
           if(response.isSuccess){
         this.taostr.success(response.message);
         this.router.navigate(['/partnerseeker/jobHistories']);
        }
      },
        error:(err)=>{
          this.showLoader=false;
          this.taostr.error(err.error.message)}
        })
      }

     
  
  }
  
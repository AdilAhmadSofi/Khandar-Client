import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HobbyRequest, hobbyResponse } from 'src/app/Models/hobby';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';

@Component({
  selector: 'app-add-hobby',
  templateUrl: './add-hobby.component.html',
  styleUrls: ['./add-hobby.component.css']
})
export class AddHobbyComponent implements OnInit {

 
  constructor( private service:PartnerSeekerService, private taostr : ToastrService, private router:Router) { }
  hobby:HobbyRequest = new HobbyRequest();
  showLoader=false
    ngOnInit(): void {
    }
    submitHobby(){
      this.showLoader= true;
      this.service.addHobby(this.hobby).subscribe({

        next:(response)=>
        { 
          this.showLoader=false;
           if(response.isSuccess){
         this.taostr.success(response.message);
         this.router.navigate(["/partnerseeker/hobbies"])
        }
      },
        error:(err)=>{
          this.showLoader=false;
          this.taostr.error(err.error.message)}
        })
      }
  
  }
  

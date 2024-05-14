import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { hobbyResponse } from 'src/app/Models/hobby';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  showLoader=false;
  hobbies:hobbyResponse[]=[];
  constructor(private service:PartnerSeekerService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getMyHobbies();
  }
  getMyHobbies(){
    this.showLoader=true;
    this.service.getMyHobbies().subscribe({

      next:(response)=>
      { 
        this.showLoader=false;
         if(response.isSuccess){
     this.hobbies =response.result;
      }
    },
      error:(err)=>{
        this.showLoader=false;
        this.toastr.error(err.error.message)}
      })
   
  }

  deleteHobby(id:string){
    this.service.deleteHobby(id).subscribe({
      next:(res)=>{
          this.toastr.success(res.message);
          this.getMyHobbies();

      },
      error:(err)=>{
          this.toastr.error(err.error.message);
      }
    })
  }

}


  
 
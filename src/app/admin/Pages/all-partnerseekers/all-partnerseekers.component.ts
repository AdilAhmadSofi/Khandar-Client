import { Component, OnInit } from '@angular/core';
import { PartnerSeekerPublicResponse } from 'src/app/Models/partnerSeeker';
import { SearchModel } from 'src/app/Models/searchModel';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-partnerseekers',
  templateUrl: './all-partnerseekers.component.html',
  styleUrls: ['./all-partnerseekers.component.css']
})
export class AllPartnerseekersComponent implements OnInit {
  partnerSeekerResponses!:PartnerSeekerPublicResponse[];
searchModelRequest=new SearchModel();

  constructor(private service:PartnerSeekerService) { }
  pageNo=0;
  imageBaseUrl=environment.baseUrl;

  ngOnInit(): void {
    this.getAllPartnerSeekers();
  }
  getAllPartnerSeekers(){
    this.service.getAllPartnerSeekers().subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.partnerSeekerResponses=response.result;
          console.log(this.partnerSeekerResponses);
        }
      },
      error:(err)=>{
          console.log(err.message)
      }
     })
  }


  searchByName(searchTerm:string){
    
    if(searchTerm ==''){
      this.getAllPartnerSeekers();
    }
    else{
      this.service.getSearchPartnerSeeker(searchTerm).subscribe({
        next:(response)=>{
          if(response.isSuccess){
            this.partnerSeekerResponses=response.result;
            console.log(this.partnerSeekerResponses);
          }
        },
        error:(err)=>{
            console.log(err.message)
        }
       })
    }
    
  }
}

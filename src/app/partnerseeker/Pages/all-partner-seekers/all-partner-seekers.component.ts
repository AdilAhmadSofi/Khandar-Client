import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoggedInCredentials } from 'src/app/Models/loggedInCredentials';
import { BasicProfileResponse, PartnerSeekerPublicResponse } from 'src/app/Models/partnerSeeker';
import { ProposalResponse } from 'src/app/Models/proposal';
import { GenericService } from 'src/app/Services/generic.service';
import { PartnerSeekerService } from 'src/app/Services/partner-seeker.service';
import { ProposalService } from 'src/app/Services/proposal.service';
import { SharedService } from 'src/app/Services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-partner-seekers',
  templateUrl: './all-partner-seekers.component.html',
  styleUrls: ['./all-partner-seekers.component.css']
})
export class AllPartnerSeekersComponent implements OnInit {
  localObj:LoggedInCredentials|null=new LoggedInCredentials();
  imageBaseUrl=environment.baseUrl;
  partnerSeekerResponses!:PartnerSeekerPublicResponse[];
  proposalResponse!:ProposalResponse;
  pageNo=0;
  myId="";
  basicProfileResponse!:BasicProfileResponse;
  flag=false;
  constructor(private service:PartnerSeekerService,
     private proposalService:ProposalService,
    private sharedService:SharedService,
    private toastr:ToastrService,
    private router:Router,
    private genericService:GenericService) { }

  ngOnInit(): void {
    this.localObj=this.sharedService.getLocalObject();
    console.log(this.localObj)
    this.getAllPartnerSeekers();
    this.getMyProfile();
  
  }

  getAllPartnerSeekers(){
    this.service.getGetAllPartnerSeekers().subscribe({
      next:(response)=>{
        console.log(response);
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
    if(searchTerm == ''){
      this.getAllPartnerSeekers();
    }
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

  getMyProfile()
  {

        this.genericService.Find<BasicProfileResponse>("partnerSeekers/profile").subscribe({
          next:(response)=>{
            this.basicProfileResponse=response.result;
            console.log(this.basicProfileResponse)
          },
          error:(err)=>{}
        });
      }


  sendProposal(id:string){

    if(this.basicProfileResponse.aadhaarNo == "")
    {
      this.flag=true;
      this.toastr.warning("Please Upload Your Personal Information");
      this.router.navigate(["/partnerseeker/editprofile"])

    }
    else if(this.basicProfileResponse.addressLine== null)
    {
      this.flag=true;
      this.toastr.warning("Please Update Your Address");
      this.router.navigate(["/partnerseeker/addaddress"]);

    }
    else if(this.basicProfileResponse.qualification==null)
    {
      this.flag=true;
      this.toastr.warning("Please Update Your Qualification")
      this.router.navigate(["/partnerseeker/addQualification"])
    }
    else{
      this.proposalService.sendProposal(id).subscribe({
        next:(response)=>{
          if(response.isSuccess){
            this.proposalResponse=response.result;
            
            this.toastr.success(response.message);
          }
        },
        error:(err)=>{
            this.toastr.error(err.error.message);
        }
       })
    }
    
  }

  previous(){
    if(this.pageNo <= 0)
    this.pageNo= 0
  else
    this.pageNo-=1;

    this.getAllPartnerSeekers();
  }

  next(){
    this.pageNo+=1;
    this.getAllPartnerSeekers();
  }

  first(){
    this.pageNo=1;
    this.getAllPartnerSeekers();
  }
  second(){
    this.pageNo=2;
    this.getAllPartnerSeekers();
  }
  third(){
    this.pageNo=3;
    this.getAllPartnerSeekers();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    const windowBottom = windowHeight + window.scrollY;

    if (windowBottom >= docHeight) {
      this.pageNo++;
      this.getAllPartnerSeekers();
    }
  }
  
}

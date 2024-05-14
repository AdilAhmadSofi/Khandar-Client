import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartnerSeekerPublicResponse } from 'src/app/Models/partnerSeeker';
import { ProposalInfoResponse, ProposalResponse } from 'src/app/Models/proposal';
import { ProposalService } from 'src/app/Services/proposal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sent-proposal',
  templateUrl: './sent-proposal.component.html',
  styleUrls: ['./sent-proposal.component.css']
})
export class SentProposalComponent implements OnInit {
  imageBaseUrl=environment.baseUrl;
  partnerSeekerResponses!:PartnerSeekerPublicResponse[];
  proposalResponse!:ProposalResponse;
  proposalInfoResponses: ProposalInfoResponse[]=[];
  isEmpty = false;
  constructor(private proposalService : ProposalService,private toastr:ToastrService) 
  { 

  }

  ngOnInit(): void {
    this.getSentProposals();
  }



getSentProposals(){
  this.proposalService.mySentProposals().subscribe({
    next:(response)=>{
     this.proposalInfoResponses= response.result;
     if(response.result.length >0 ){
       this.isEmpty=false;
     }
     else  this.isEmpty=true;
    },
    error:(err) =>{
      this.isEmpty=true;
    },
  })
}
}

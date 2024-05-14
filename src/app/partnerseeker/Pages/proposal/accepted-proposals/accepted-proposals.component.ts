import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PersonalInfoResponse } from 'src/app/Models/partnerSeeker';
import { ProposalInfoResponse, ProposalResponse } from 'src/app/Models/proposal';
import { ProposalService } from 'src/app/Services/proposal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accepted-proposals',
  templateUrl: './accepted-proposals.component.html',
  styleUrls: ['./accepted-proposals.component.css']
})
export class AcceptedProposalsComponent implements OnInit {

  proposalInfoResponses: ProposalInfoResponse[] = [];
  imageBaseUrl = environment.baseUrl;
  proposalResponse!:ProposalResponse;

  constructor(private proposalService: ProposalService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.acceptedProposals();
  }

  acceptedProposals() {
    this.proposalService.acceptedProposals().subscribe({
      next: (response) => {
        this.proposalInfoResponses = response.result;
        console.log( this.proposalInfoResponses )
      },
      error: (err) => {
        this.toastr.error(err.error.message)
      },
    })
  }

  
}

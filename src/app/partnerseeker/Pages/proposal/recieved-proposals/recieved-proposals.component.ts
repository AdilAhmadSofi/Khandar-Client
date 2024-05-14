import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProposalStatus } from 'src/app/Enums/proposalStatus';
import { ProposalInfoResponse, ProposalResponse, ProposalUpdateRequest } from 'src/app/Models/proposal';
import { ProposalService } from 'src/app/Services/proposal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recieved-proposals',
  templateUrl: './recieved-proposals.component.html',
  styleUrls: ['./recieved-proposals.component.css']
})
export class RecievedProposalsComponent implements OnInit {
isEmpty = false;
  proposalInfoResponses: ProposalInfoResponse[] = [];
  imageBaseUrl = environment.baseUrl;
  proposalResponse!:ProposalResponse;

  constructor(private proposalService: ProposalService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.recievedProposals();
  }

  recievedProposals() {
    this.proposalService.recievedProposals().subscribe({
      next: (response) => {
        this.proposalInfoResponses = response.result;
        if(response.result.length >0 ){
          this.isEmpty=false;
        }
        else  this.isEmpty=true;
      },
      error: (err) => {
        this.toastr.error(err.error.message)
      },
    })
  }

  updateProposalStatus(id: string, status: boolean) {
    let model = new ProposalUpdateRequest();
    model.id = id;

    if (status) model.proposalStatus = ProposalStatus.Accepted;
    else model.proposalStatus = ProposalStatus.Rejected;

    model.allowChat=false;

    this.proposalService.updateProposalStatus(model).subscribe({
      next: (response) => {
        this.proposalResponse = response.result;
    this.recievedProposals();

      },
      error: (err) => {
        this.toastr.error(err.error.message)
      },
    });
  }
}

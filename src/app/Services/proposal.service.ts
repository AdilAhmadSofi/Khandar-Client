import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Models/api-response';
import { ProposalInfoResponse, ProposalResponse, ProposalUpdateRequest } from '../Models/proposal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor(private httpClient: HttpClient) { }


  sendProposal(id:string):Observable<ApiResponse<ProposalResponse>> {
    return this.httpClient.post<ApiResponse<ProposalResponse>>(`${environment.apiBaseUrl}proposals/send-proposal/${id}`,null);

  }


  mySentProposals():Observable<ApiResponse<ProposalInfoResponse[]>>
  {
    return this.httpClient.get<ApiResponse<ProposalInfoResponse[]>>(`${environment.apiBaseUrl}proposals/sent-proposals`);

  }


  recievedProposals():Observable<ApiResponse<ProposalInfoResponse[]>>{
    return this.httpClient.get<ApiResponse<ProposalInfoResponse[]>>(`${environment.apiBaseUrl}proposals/recieved-proposals`);
  }


  updateProposalStatus(model:ProposalUpdateRequest):Observable<ApiResponse<ProposalResponse>>{
    return this.httpClient.put<ApiResponse<ProposalResponse>>(`${environment.apiBaseUrl}proposals/update-proposal-status`,model);
  }

  acceptedProposals():Observable<ApiResponse<ProposalInfoResponse[]>>{
    return this.httpClient.get<ApiResponse<ProposalInfoResponse[]>>(`${environment.apiBaseUrl}proposals/accepted-proposals`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Models/api-response';
import { AppealResponse, AppealSummary, DonationAppealRequest, DonationAppealResponse, UpdateAppealStatusRequest } from '../Models/donationAppeal';
import { GenericService } from './generic.service';
import { environment } from 'src/environments/environment';
import { DonationAppealStatus } from '../Enums/donationAppealStatus';
import { BeneficiaryDetailsResponse } from '../Models/beneficiaryDetails';
import { AppealMemberVerificationResponse, AppealVerificationRequest, AppealVerificationResponse } from '../Models/appealVerification';
import { AppOrderRequest, AppOrderResponse } from '../Models/appOrder';
import { MyTransactionResponse, TransactionResponse } from '../Models/transaction';

@Injectable({
  providedIn: 'root'
})
export class DonationAppealService {

  constructor(private httpClient: HttpClient) {}


  getMyDonationAppeal():Observable<ApiResponse<DonationAppealResponse[]>> {
    return this.httpClient.get<ApiResponse<DonationAppealResponse[]>>(`${environment.apiBaseUrl}DonationAppeals/my-appeal`);
  }


  getAllDonationAppeal():Observable<ApiResponse<AppealResponse[]>> {
    return this.httpClient.get<ApiResponse<AppealResponse[]>>(`${environment.apiBaseUrl}DonationAppeals/all-appeals`);
  }

  getTotalAppeals(status:DonationAppealStatus):Observable<number> {
    return this.httpClient.get<number>(`${environment.apiBaseUrl}DonationAppeals/total-appeals?status=${status}`);
  }

  getTeamTotalAppeals(teamId:string, status:DonationAppealStatus):Observable<number> {
    return this.httpClient.get<number>(`${environment.apiBaseUrl}DonationAppeals/total-team-appeals/${teamId}?status=${status}`);
  }

  getMemberTotalAppeals(teamId:string):Observable<ApiResponse<AppealResponse[]>> {
    return this.httpClient.get<ApiResponse<AppealResponse[]>>(`${environment.apiBaseUrl}DonationAppeals/team-appeals/${teamId}`);
  }


  getAllDonationAppealByStatus(appealStatus:string):Observable<ApiResponse<AppealResponse[]>> {
    return this.httpClient.get<ApiResponse<AppealResponse[]>>(`${environment.apiBaseUrl}DonationAppeals/all-appeals-by-status?appealStatus=${appealStatus}`);
  }

  getMyTeamDonationAppealsByStatus(teamId:string, appealStatus:string):Observable<ApiResponse<AppealResponse[]>> {
    return this.httpClient.get<ApiResponse<AppealResponse[]>>(`${environment.apiBaseUrl}DonationAppeals/Team-Appeals-by-status/${teamId}?appealStatus=${appealStatus}`);
  }

  getAllApprovedDonationAppeal():Observable<ApiResponse<AppealResponse[]>> {
    return this.httpClient.get<ApiResponse<AppealResponse[]>>(`${environment.apiBaseUrl}DonationAppeals/all-approved-appeals`);
  }

  getMyTeamDonationAppeals(teamId:string):Observable<ApiResponse<AppealResponse[]>> {
    return this.httpClient.get<ApiResponse<AppealResponse[]>>(`${environment.apiBaseUrl}DonationAppeals/Team-Appeals-by-teamid/${teamId}`);
  }


  getBeneficiaryDetails(id:string):Observable<ApiResponse<BeneficiaryDetailsResponse>> {
    return this.httpClient.get<ApiResponse<BeneficiaryDetailsResponse>>(`${environment.apiBaseUrl}DonationAppeals/beneficiary-details/${id}`);
  }



  addDonationAppeal(modal:FormData):Observable<ApiResponse<DonationAppealResponse>>{
    return this.httpClient.post<ApiResponse<DonationAppealResponse>>(environment.apiBaseUrl+"DonationAppeals",modal)
   }


   addVerificationAppeal(modal:AppealVerificationRequest):Observable<ApiResponse<AppealVerificationResponse>>{
    return this.httpClient.post<ApiResponse<AppealVerificationResponse>>(environment.apiBaseUrl+"AppealVerifications/verify-appeal",modal)
   }


   getMemberVerification(teamAssignmentId:string):Observable<ApiResponse<AppealMemberVerificationResponse>> {
    return this.httpClient.get<ApiResponse<AppealMemberVerificationResponse>>(`${environment.apiBaseUrl}AppealVerifications/member-verification/${teamAssignmentId}`);
  }
   
  getAllVerifications(teamAssignmentId:string):Observable<ApiResponse<AppealMemberVerificationResponse[]>> {
    return this.httpClient.get<ApiResponse<AppealMemberVerificationResponse[]>>(`${environment.apiBaseUrl}AppealVerifications/verifications/${teamAssignmentId}`);
  }

   updateDonationAppeal(modal:FormData):Observable<ApiResponse<DonationAppealResponse[]>>{
    return this.httpClient.put<ApiResponse<DonationAppealResponse[]>>(environment.apiBaseUrl+"DonationAppeals/update-appeal",modal)
   }

   cancelDonationAppeal(appealid:string):Observable<ApiResponse<AppealResponse>>{
    let model= new UpdateAppealStatusRequest();
      model.appealId=appealid,
      model.donationAppealStatus=DonationAppealStatus.Cancelled;

    return this.httpClient.put<ApiResponse<AppealResponse>>(environment.apiBaseUrl+"DonationAppeals/update-appeal-status"
    ,model)
   }

   updateDonationAppealStatus(model:UpdateAppealStatusRequest):Observable<ApiResponse<AppealResponse>>{
    console.log(model)
    return this.httpClient.put<ApiResponse<AppealResponse>>(environment.apiBaseUrl+"DonationAppeals/update-appeal-status"
    ,model)
   }


   
  payDonation(modal: AppOrderRequest): Observable<ApiResponse<AppOrderResponse>> {
   
    return this.httpClient.post<ApiResponse<AppOrderResponse>>(
      environment.apiBaseUrl + 'donations/CreateOrder',
      modal
    );
  }

CapturePaymentDetails(paymentOptions: any): Observable<ApiResponse<any>> {
  return this.httpClient.post<ApiResponse<any>>(
    environment.apiBaseUrl + 'donations/CapturePaymentDetails',
    paymentOptions
  );
}


getAllTransactions():Observable<ApiResponse<TransactionResponse[]>> {
  return this.httpClient.get<ApiResponse<TransactionResponse[]>>(`${environment.apiBaseUrl}Donations/all-transactions`);
}

getAllTransactionsAsOfNow(asOfNowDate:string):Observable<ApiResponse<TransactionResponse[]>> {
  return this.httpClient.get<ApiResponse<TransactionResponse[]>>(`${environment.apiBaseUrl}Donations/all-transactions-as-of-now?toDate=`+asOfNowDate);
}

getAllTransactionsByDateRange(fromDate:string,toDate:string):Observable<ApiResponse<TransactionResponse[]>> {
  return this.httpClient.get<ApiResponse<TransactionResponse[]>>(`${environment.apiBaseUrl}Donations/all-transactions-from-to?fromDate=${fromDate}&toDate=${toDate}`);
}


getAllTransactionsByAppealId(appealId:string):Observable<ApiResponse<TransactionResponse[]>> {
  return this.httpClient.get<ApiResponse<TransactionResponse[]>>(`${environment.apiBaseUrl}Donations/all-transactions-appealid/${appealId}`);
}


getMyTransactions(userId?:string):Observable<ApiResponse<MyTransactionResponse[]>> {
  return this.httpClient.get<ApiResponse<MyTransactionResponse[]>>(`${environment.apiBaseUrl}Donations/my-transactions?userId=${userId}`);
}

getAppealSummary(count:number):Observable<ApiResponse<AppealSummary[]>> {
  return this.httpClient.get<ApiResponse<AppealSummary[]>>(`${environment.apiBaseUrl}Donations/appeal-summary?count=${count}`);
}
 

getTotalTransactionAmount():Observable<number> {
  return this.httpClient.get<number>(`${environment.apiBaseUrl}Donations/total-transactions`);
}

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppearanceInfoResponse, BasicProfileResponse, FamilyInfoResponse, PartnerSeekerPublicResponse, PartnerSeekerRequest, PartnerSeekerResponse, PersonalInfoResponse, ProfessionalInfoResponse, ReligiousInfoResponse } from '../Models/partnerSeeker';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../Models/api-response';
import { qualificationRequest, qualificationResponse } from '../Models/qualification';
import { JobHistoryRequest, JobHistoryResponse } from '../Models/jobHistory';
import { socialMediaRequest, socialMediaResponse } from '../Models/socialMedia';
import { HobbyRequest, hobbyResponse } from '../Models/hobby';
import { AddressRequest, AddressResponse } from '../Models/address';
import { SearchModel } from '../Models/searchModel';

@Injectable({
  providedIn: 'root'
})
export class PartnerSeekerService {

  constructor(private httpClient: HttpClient) {}
  UpdatePartnerSeeker(modal: FormData): Observable<ApiResponse<PartnerSeekerResponse>> {
    return this.httpClient.put<ApiResponse<PartnerSeekerResponse>>(
      environment.apiBaseUrl + 'partnerseekers',
      modal
    );
  }

  getMyProfile():Observable<ApiResponse<PartnerSeekerResponse>> {
    return this.httpClient.get<ApiResponse<PartnerSeekerResponse>>(`${environment.apiBaseUrl}partnerseekers/my-details`);
  }


  getLoddedInBasicDetails():Observable<ApiResponse<BasicProfileResponse>> {
    return this.httpClient.get<ApiResponse<BasicProfileResponse>>(`${environment.apiBaseUrl}partnerseekers/profile`);
  }

  getGetAllPartnerSeekers():Observable<ApiResponse<PartnerSeekerPublicResponse[]>> {
    return this.httpClient.get<ApiResponse<PartnerSeekerPublicResponse[]>>(`${environment.apiBaseUrl}partnerseekers`);
  }

  getAllPartnerSeekers():Observable<ApiResponse<PartnerSeekerPublicResponse[]>> {
    return this.httpClient.get<ApiResponse<PartnerSeekerPublicResponse[]>>(`${environment.apiBaseUrl}partnerseekers/all-partnerseekers`);
  }



  getSearchPartnerSeeker(searchTerm:string):Observable<ApiResponse<PartnerSeekerPublicResponse[]>> {
    return this.httpClient.get<ApiResponse<PartnerSeekerPublicResponse[]>>(`${environment.apiBaseUrl}partnerseekers/search?nameTerm=${searchTerm}`);
  }


  addQualification(Modal:qualificationRequest):Observable<ApiResponse<qualificationResponse>>{
    return this.httpClient.post<ApiResponse<qualificationResponse>>(environment.apiBaseUrl+'qualifications',Modal);
  }

  getMyQualifications():Observable<ApiResponse<qualificationResponse[]>> {
    return this.httpClient.get<ApiResponse<qualificationResponse[]>>(`${environment.apiBaseUrl}qualifications`);
  }

  deleteQualification(id:string):Observable<ApiResponse<qualificationResponse>>{
    return this.httpClient.delete<ApiResponse<qualificationResponse>>(environment.apiBaseUrl+"qualifications/"+id)
   }

  addJobHistory(Modal:JobHistoryRequest):Observable<ApiResponse<JobHistoryResponse>>{
    return this.httpClient.post<ApiResponse<JobHistoryResponse>>(environment.apiBaseUrl+"JobHistories",Modal)
  }

  getMyJobHistories():Observable<ApiResponse<JobHistoryResponse[]>> {
    return this.httpClient.get<ApiResponse<JobHistoryResponse[]>>(`${environment.apiBaseUrl}JobHistories`);
  }

  deleteJobHistory(id:string):Observable<ApiResponse<JobHistoryResponse>>{
    return this.httpClient.delete<ApiResponse<JobHistoryResponse>>(environment.apiBaseUrl+"JobHistories/"+id)
 }


  addHobby(Modal:HobbyRequest):Observable<ApiResponse<hobbyResponse>>{
    return this.httpClient.post<ApiResponse<hobbyResponse>>(environment.apiBaseUrl+"Hobbies",Modal)
  }

  getMyHobbies():Observable<ApiResponse<hobbyResponse[]>> {
    return this.httpClient.get<ApiResponse<hobbyResponse[]>>(`${environment.apiBaseUrl}Hobbies`);
  }

  deleteHobby(id:string):Observable<ApiResponse<hobbyResponse>>{
    return this.httpClient.delete<ApiResponse<hobbyResponse>>(environment.apiBaseUrl+"Hobbies/"+id)
 }

  getMySocialMedias():Observable<ApiResponse<socialMediaResponse[]>>{
    return this.httpClient.get<ApiResponse<socialMediaResponse[]>>(environment.apiBaseUrl+'socialMedias');
  }
    
  addSocialMedia(Modal:socialMediaRequest):Observable<ApiResponse<socialMediaResponse>>{
    return this.httpClient.post<ApiResponse<socialMediaResponse>>(environment.apiBaseUrl+"SocialMedias",Modal)
  }

  deleteSocialMedia(id:string):Observable<ApiResponse<socialMediaResponse>>{
    return this.httpClient.delete<ApiResponse<socialMediaResponse>>(environment.apiBaseUrl+"SocialMedias/"+id)
   }

  getMyAddresses():Observable<ApiResponse<AddressResponse[]>>{
    return this.httpClient.get<ApiResponse<AddressResponse[]>>(environment.apiBaseUrl+'addresses');
  }
    
  addaAddress(Modal:AddressRequest):Observable<ApiResponse<AddressResponse>>{
    return this.httpClient.post<ApiResponse<AddressResponse>>(environment.apiBaseUrl+"addresses",Modal)
  }

  deleteAddress(id:string):Observable<ApiResponse<AddressResponse>>{
    return this.httpClient.delete<ApiResponse<AddressResponse>>(environment.apiBaseUrl+"addresses/"+id)
   }




  getPartnerPersonalInfo(id:string):Observable<ApiResponse<PersonalInfoResponse>> {
    return this.httpClient.get<ApiResponse<PersonalInfoResponse>>(`${environment.apiBaseUrl}partnerseekers/personal-info/`+id);
  }

  getPartnerReligious(id:string):Observable<ApiResponse<ReligiousInfoResponse>> {
    return this.httpClient.get<ApiResponse<ReligiousInfoResponse>>(`${environment.apiBaseUrl}partnerseekers/Religious/`+id);
  }

  getPartnerAppearance(id:string):Observable<ApiResponse<AppearanceInfoResponse>> {
    return this.httpClient.get<ApiResponse<AppearanceInfoResponse>>(`${environment.apiBaseUrl}partnerseekers/Appearance/`+id);
  }

  
  getPartnerFamily(id:string):Observable<ApiResponse<FamilyInfoResponse>> {
    return this.httpClient.get<ApiResponse<FamilyInfoResponse>>(`${environment.apiBaseUrl}partnerseekers/family/`+id);
  }

  getPartnerProfessional(id:string):Observable<ApiResponse<ProfessionalInfoResponse>> {
    return this.httpClient.get<ApiResponse<ProfessionalInfoResponse>>(`${environment.apiBaseUrl}partnerseekers/professional/`+id);
  }

  getPartnerQualification(id:string):Observable<ApiResponse<qualificationResponse[]>> {
    return this.httpClient.get<ApiResponse<qualificationResponse[]>>(`${environment.apiBaseUrl}partnerseekers/qualifications/`+id);
  }

  getPartnerHobbies(id:string):Observable<ApiResponse<hobbyResponse[]>> {
    return this.httpClient.get<ApiResponse<hobbyResponse[]>>(`${environment.apiBaseUrl}partnerseekers/hobbies/`+id);
  }

  getPartnerAddresses(id:string):Observable<ApiResponse<AddressResponse[]>> {
    return this.httpClient.get<ApiResponse<AddressResponse[]>>(`${environment.apiBaseUrl}partnerseekers/addresses/`+id);
  }

  
  getPartnerJobHistories(id:string):Observable<ApiResponse<JobHistoryResponse[]>> {
    return this.httpClient.get<ApiResponse<JobHistoryResponse[]>>(`${environment.apiBaseUrl}partnerseekers/job-histories/`+id);
  }

    
  getPartnerSocialMedia(id:string):Observable<ApiResponse<socialMediaResponse[]>> {
    return this.httpClient.get<ApiResponse<socialMediaResponse[]>>(`${environment.apiBaseUrl}partnerseekers/socialmedias/`+id);
  }

  


  getTotalPartnerseekers():Observable<number> {
    return this.httpClient.get<number>(`${environment.apiBaseUrl}PartnerSeekers/total-partnerseekers`);
  }

  
}

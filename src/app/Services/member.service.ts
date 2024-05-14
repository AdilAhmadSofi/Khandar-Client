import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Models/api-response';
import { MemberBasicDetailsResponse, MemberRequest, MemberResponse } from '../Models/member';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient: HttpClient) { }

  getAllMembers():Observable<ApiResponse<MemberResponse[]>> {
    return this.httpClient.get<ApiResponse<MemberResponse[]>>(`${environment.apiBaseUrl}members`);
  }

  getTotalMembers():Observable<number> {
    return this.httpClient.get<number>(`${environment.apiBaseUrl}members/total-member`);
  }
 
  getMemberById(id:string=''):Observable<ApiResponse<MemberResponse>> {
    return this.httpClient.get<ApiResponse<MemberResponse>>(`${environment.apiBaseUrl}members/member-id?id=${id}`);
  }

  getAllMembersBasicDetails():Observable<ApiResponse<MemberBasicDetailsResponse[]>> {
    return this.httpClient.get<ApiResponse<MemberBasicDetailsResponse[]>>(`${environment.apiBaseUrl}members/member-basic-details`);
  }


  deleteMembers(id:string):Observable<ApiResponse<MemberResponse>> {
    return this.httpClient.delete<ApiResponse<MemberResponse>>(`${environment.apiBaseUrl}members/${id}`);
  }

  updateMember(model:FormData):Observable<ApiResponse<MemberResponse>> {
    return this.httpClient.put<ApiResponse<MemberResponse>>(`${environment.apiBaseUrl}members`,model);
  }
}

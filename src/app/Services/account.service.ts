import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminSignupRequest, SignupRequest } from '../Models/Signup/signuprequest';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignupResponse } from '../Models/Signup/signupresponse';
import { LoginRequest } from '../Models/Login/loginRequest';
import { LoginResponse } from '../Models/Login/loginresponse';

import { ApiResponse } from '../Models/api-response';
import { JobHistoryRequest, JobHistoryResponse } from '../Models/jobHistory';
import { qualificationRequest, qualificationResponse } from '../Models/qualification';
import { socialMediaRequest } from '../Models/socialMedia';
import { InterceptorService } from './interceptor.service';
import { GenericService } from './generic.service';
import { ResetPassword } from '../Models/reset-password';
import { AddContact, ContactResponse } from '../Models/contact';
import { ChangePasswordRequest } from '../Models/changePassword';
@Injectable({
  providedIn: 'root',
})
export class AccountService{

   constructor(private httpClient: HttpClient) {
  }

  signUp(modal: SignupRequest): Observable<SignupResponse> {
    return this.httpClient.post<SignupResponse>(
      environment.apiBaseUrl + 'users/signup',
      modal
    );
  }


  adminSignUp(modal: AdminSignupRequest): Observable<SignupResponse> {
    return this.httpClient.post<SignupResponse>(
      environment.apiBaseUrl + 'users/admin-signup',
      modal
    );
  }

  checkUserName(userName: string): Observable<boolean> {
    return this.httpClient.get<boolean>(
      environment.apiBaseUrl + 'users/check-username/'+userName
     
    );
  }

  login(modal: LoginRequest): Observable<ApiResponse<LoginResponse>> {
    return this.httpClient.post<ApiResponse<LoginResponse>>(
      environment.apiBaseUrl + 'Users/login',
      modal
    );
  }

  confirmEmail(code:string):  Observable<ApiResponse<LoginResponse>> {
    return this.httpClient.get<ApiResponse<LoginResponse>>(
      environment.apiBaseUrl + 'users/verifyEmail/'+code,

    );
  }

  forgotPassword(email: string): Observable<ApiResponse<LoginResponse>> {
    return this.httpClient.post<ApiResponse<LoginResponse>>(
      environment.apiBaseUrl + 'Users/forgotPassword',
      {
        email:email
      }
    );
  }


  resetPassword(model: ResetPassword): Observable<ApiResponse<string>> {
    return this.httpClient.post<ApiResponse<string>>(
      environment.apiBaseUrl + 'Users/resetpassword',
     model
    );
  }

 

 

  addSocialMedia(Modal:socialMediaRequest):Observable<ApiResponse<string>>{
    return this.httpClient.post<ApiResponse<string>>(environment.apiBaseUrl+'api/socialMedias',Modal)
  }


  addContact(model: AddContact): Observable<ContactResponse> {
    return this.httpClient.post<ContactResponse>(
      environment.apiBaseUrl + 'Contacts',
      model
    );
  }
  getContacts() {
    return this.httpClient.get<ApiResponse<ContactResponse[]>>(
      environment.apiBaseUrl + 'Contacts'
    );
  }
  getContactById(id: string) {
    return this.httpClient.get<ContactResponse>(
      environment.apiBaseUrl + `Contacts/${id}`
    );
  }
  deleteContact(id: string) {
    return this.httpClient.delete<ApiResponse<ContactResponse>>(environment.apiBaseUrl + `Contacts/${id}`);
  }


  changePass(model: ChangePasswordRequest) {
    return this.httpClient.post<ApiResponse<string>>(
      environment.apiBaseUrl + 'users/changePassword',
      model
    );
  }

}

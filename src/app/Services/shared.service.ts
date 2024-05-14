import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInCredentials } from '../Models/loggedInCredentials';

import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Models/api-response';
import { UserRole } from '../Enums/userRole';
import { BasicProfileResponse } from '../Models/partnerSeeker';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private service: AccountService
  ) {}

  getToken(): string {
    return localStorage.getItem('EKhander_Token')
      ? JSON.parse(localStorage['EKhander_Token']).token
      : '';
  }

  getLocalObject(): LoggedInCredentials | null {
    return localStorage.getItem('EKhander_Token')
      ? JSON.parse(localStorage['EKhander_Token'])
      : null;
  }


  getProfileLocalObject(): BasicProfileResponse | null {
    return localStorage.getItem('EKhander_Token_Profile')
      ? JSON.parse(localStorage['EKhander_Token_Profile'])
      : null;
  }
 

  

  isUserAuthenticated(role: UserRole): boolean {
    var rrr= this.getLocalObject();
    if (
      this.getLocalObject() &&
      this.getLocalObject()?.token &&
      this.getLocalObject()?.userRole == role
    ) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  logOut() {
    environment
      .fireConfirmSwal('Are you sure you want to Logout?')
      .then((res) => {
        if (res.isConfirmed) {
          localStorage.removeItem('EKhander_Token');
          localStorage.removeItem('EKhander_Id');
          this.router.navigate(['/login']);
        }
      });
  }

  deleteItem<T>(url: string, id: string): Observable<ApiResponse<T>> {
    return this.httpClient.delete<ApiResponse<T>>(
      environment.apiBaseUrl + url + '/' + id
    );
  }
  // isExists(url: string, term: string): Observable<any> {
  //   return this.httpClient.get<any>(`${environment.apiBaseUrl}${url}/${term}`);
  // }

  isExists(url: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiBaseUrl}${url}`);
  }

}

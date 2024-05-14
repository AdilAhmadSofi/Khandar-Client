import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressRequest, AddressResponse } from '../Models/address';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../Models/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) {}

  getMyAddresses():Observable<ApiResponse<AddressResponse[]>> {
    return this.httpClient.get<ApiResponse<AddressResponse[]>>(`${environment.apiBaseUrl}addresses/entityid`);
  }


  addAddress(address:AddressRequest):Observable<ApiResponse<AddressResponse>>{
    return this.httpClient.post<ApiResponse<AddressResponse>>(environment.apiBaseUrl+"addresses",address)
   }




   deleteAddress(id:string):Observable<ApiResponse<AddressResponse>>{
    return this.httpClient.delete<ApiResponse<AddressResponse>>(environment.apiBaseUrl+"addresses?id="+id)
   }
}

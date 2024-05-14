import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../Services/shared.service';
import { UserRole } from '../Enums/userRole';

@Injectable({
  providedIn: 'root'
})
export class PartnerseekerGuard implements CanActivate {
  constructor(private service: SharedService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return  this.service.isUserAuthenticated(UserRole.partnerSeeker);
  }
  
}

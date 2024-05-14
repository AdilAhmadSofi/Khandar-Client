import { Component, OnInit } from '@angular/core';
import { LoggedInCredentials } from 'src/app/Models/loggedInCredentials';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  localObj:LoggedInCredentials|null=new LoggedInCredentials();
  constructor(public sharedService:SharedService) { }
  ngOnInit(): void {
  this.localObj=this.sharedService.getLocalObject();
  }
}

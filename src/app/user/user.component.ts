import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 EntityId!:string;
  constructor() { }

  ngOnInit(): void {
  }
  receiveId(id:string){
    this.EntityId=id;
    
  }
}

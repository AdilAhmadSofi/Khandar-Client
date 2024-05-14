import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactResponse } from 'src/app/Models/contact';
import { AccountService } from 'src/app/Services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactList:ContactResponse[]=[];

  constructor(private service:AccountService, private toastr:ToastrService) { }

  ngOnInit(): void {
   this.contactListFunc();
  }
  contactListFunc(){
    this.service.getContacts().subscribe(response=>{
      console.log(response)
      //this.contactList=response;
      this.contactList=response.result;

    })
  }

  deleteContact(val:string){
    environment
    .fireConfirmSwal('Are you sure You Want to Delete this Contact?')
    .then((result) => {
      if (result.isConfirmed) {
        this.service.deleteContact(val).subscribe(
          (response) => {
            if (response.isSuccess)
              this.toastr.success(response.message);
              this.contactListFunc();
          },
          (errRes) => {
            if (
              errRes.error.statusCode === HttpStatusCode.NotFound ||
              errRes.error.statusCode === HttpStatusCode.BadRequest ||
              errRes.error.statusCode === HttpStatusCode.InternalServerError
            )
            this.toastr.success(errRes.error.message);
          }
        );
      }
    });
  }


}


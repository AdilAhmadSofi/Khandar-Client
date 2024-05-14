import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddContact } from 'src/app/Models/contact';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactModel:AddContact=new AddContact();

  constructor(private router:Router,private service:AccountService , private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  submitQuery(){
    this.service.addContact(this.contactModel).subscribe(response=>{
      this.toastr.success("Thanks for Contacting Us.We Will Get Back to you Soon!!")
     
  },err=>{
    this.toastr.error("Something Went Wrong")
  })
   
    setTimeout(()=>{
      this.router.navigate(['/home'])
    },3000)
  }

}


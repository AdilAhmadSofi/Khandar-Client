import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordRequest } from 'src/app/Models/changePassword';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private service: AccountService, private router: Router,
    private toastr : ToastrService) { }
  changePasswordModel: ChangePasswordRequest = new ChangePasswordRequest();
  key = '';


  ngOnInit(): void {
    let item = JSON.parse(localStorage["EKhander_Token"])
    this.key = item.Token
  }

  changePassword() {
    this.service.changePass(this.changePasswordModel).subscribe({
      next:(response)=>{
        this.toastr.success("Password Changed Successfully");
      },
      error:(err)=>{
        this.toastr.error("Invalid Password");
      }
    })
     
  }

}


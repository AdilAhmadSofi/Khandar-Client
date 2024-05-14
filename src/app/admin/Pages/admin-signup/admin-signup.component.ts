import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminSignupRequest, SignupRequest } from 'src/app/Models/Signup/signuprequest';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  showLoader=false;
  constructor(private service: AccountService, private toastr:ToastrService) {}


  ngOnInit(): void {}
  newUser: AdminSignupRequest = new AdminSignupRequest();


  createUser(): void {
    this.showLoader=true;
    this.service.adminSignUp(this.newUser).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.toastr.success(response.message);
        }
       this.showLoader=false;
      },
      error: (err) => {
       this.toastr.error(err.error.message);
       this.showLoader=false;
      },
    });
  }
}

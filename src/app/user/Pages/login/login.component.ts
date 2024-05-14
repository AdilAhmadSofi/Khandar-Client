import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRole } from 'src/app/Enums/userRole';
import { LoginRequest } from 'src/app/Models/Login/loginRequest';
import { AccountService } from 'src/app/Services/account.service';
import { environment } from 'src/environments/environment';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  showLoader = false;
  constructor(private service: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void { }
  loginCredentials: LoginRequest = new LoginRequest();
  id!: string;
  @Output() Id = new EventEmitter<string>();

  sendId(id: string) {
    id = this.id;
    this.Id.emit(id);
  }
  signIn(): void {
    this.showLoader = true;
    this.service.login(this.loginCredentials).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          var isVerified = response.result.isEmailVerified;
          if (!isVerified) {
            this.router.navigate(['/verifyemail']);
          }
          else {
            localStorage.setItem(
              'EKhander_Token',
              JSON.stringify(response.result)
            );
            switch (response.result.userRole) {
              case UserRole.admin:
                this.router.navigate(['/admin']);
                break;
              case UserRole.member:
                this.router.navigate(['/member']);
                break;
              case UserRole.partnerSeeker:
                this.router.navigate(['/partnerseeker']);
                break;
              default:
                this.router.navigate(['/']);
                break;
            }
          }
        }
        this.showLoader = false;

      },
      error: (err) => {
        this.toastr.error(err.error.message)
        this.showLoader = false;
      },
    });
  }
}

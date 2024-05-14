import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupRequest } from 'src/app/Models/Signup/signuprequest';
import { AccountService } from 'src/app/Services/account.service';
import { SharedService } from 'src/app/Services/shared.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  showLoader=false;
  isUserNameExists = false;

  validators = {
    isUniqueUserName: false,
    isUniqueEmail: false,
    isUniquePhoneNumber: false,
  };
  constructor(private service: AccountService, private toastr:ToastrService,
    private sharedService:SharedService, private router:Router) {}

  ngOnInit(): void {}
  newUser: SignupRequest = new SignupRequest();


  createUser(): void {
    this.showLoader=true;
    this.service.signUp(this.newUser).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.toastr.success(response.message);
          this.router.navigate(['/verifyemail']);
        }
       this.showLoader=false;
      },
      error: (err) => {
       this.toastr.error(err.error.message);
       this.showLoader=false;
      },
    });
  }

  // checkUserName(userName:string){
  //   this.service.checkUserName(userName).subscribe({
  //     next: (response) => {
        
  //         this.isUserNameExists= <boolean>response;
  //       console.log(this.isUserNameExists)
        
  //     },
  //     error: (err) => {
  //      this.toastr.error(err.error.message);
  //     },
  //   })
  // }



  checkIfExists(url: string, term: string) {
    this.sharedService.isExists(`users/${url}/${term}`).subscribe({
      next: (response) => {
        // First Approach
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            if (key in this.validators) {
              this.validators[key as keyof typeof this.validators] =
                !response[key];
            }
          }
        }

        // Second Approach
        // switch (url) {
        //   case 'check-phonenumber':
        //     this.validators.isUniquePhoneNumber = !response["isUniquePhoneNumber"];
        //     break;
        //   case 'check-username':
        //     this.validators.isUniqueUserName = !response.isUniqueUserName;
        //     break;
        //   default:
        //     this.validators.isUniqueEmail = !response.isUniqueEmail;
        //     break;
        // }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

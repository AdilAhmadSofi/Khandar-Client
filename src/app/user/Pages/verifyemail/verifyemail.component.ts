import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRole } from 'src/app/Enums/userRole';
import { AccountService } from 'src/app/Services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent implements OnInit {
  showLoader = false;

  constructor(private service:AccountService, private router: Router,
    private toastr:ToastrService) { }
   confirmationCode="";
  ngOnInit(): void {
  }
  confirmationEmail(){
    this.service.confirmEmail(this.confirmationCode).subscribe({
      next: (response) => {
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
        this.showLoader = false;

      },
      error: (err) => {
        this.toastr.error(err.error.message);
        this.showLoader = false;
      },
    });
  }
  }


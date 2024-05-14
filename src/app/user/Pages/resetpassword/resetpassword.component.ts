import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResetPassword } from 'src/app/Models/reset-password';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  showloader = false;
  model: ResetPassword = new ResetPassword();
  constructor(private service: AccountService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.showloader = true;
    this.model.token = this.activatedRoute.snapshot.queryParams['token'];
    
    this.service.resetPassword(this.model).subscribe(
      {
        next: (response) => {
          if (response.isSuccess) {
            this.toastr.success(response.message,"Reset Password");
            this.router.navigate(['/login']);
            this.showloader = false;
          }
        },
        error: (err) => {
           this.toastr.error(err.error.message,"Error");
          this.showloader = false;
        }

      }
    )

  }

}





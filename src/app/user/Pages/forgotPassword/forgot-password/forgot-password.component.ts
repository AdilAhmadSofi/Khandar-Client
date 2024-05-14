import { R3SelectorScopeMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/Services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
showloader=false;
  constructor(private accountService:AccountService, private troastr:ToastrService) { }

  ngOnInit(): void {
  }

  forgotPassword(email:string){
    this.showloader=true;

    this.accountService.forgotPassword(email).subscribe({
      next: (response) => {
        var res = response.result;
        this.troastr.success(response.message);
        this.showloader=false;
      },
      error: (err) => {
        this.troastr.error(err.error.message);
        this.showloader=false;
      },
      
    });
   
  }
}

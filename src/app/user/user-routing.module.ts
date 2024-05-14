import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { VerifyemailComponent } from './Pages/verifyemail/verifyemail.component';
import { ForgotPasswordComponent } from './Pages/forgotPassword/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './Pages/resetpassword/resetpassword.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { UserDetailsComponent } from '../shared/Pages/user-details/user-details.component';
import { MeetTeemComponent } from './Pages/meet-teem/meet-teem.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent }, 
      { path: 'signup', component: SignupComponent },
      { path: 'verifyemail', component: VerifyemailComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
      { path: 'resetpassword', component: ResetpasswordComponent},
      {path:'login',component:LoginComponent},
      {path:'contact-us',component:ContactUsComponent},
      {path:'user-details/:id',component:UserDetailsComponent},
      {path:'meet-team',component:MeetTeemComponent},
      {path:'about-us',component:AboutUsComponent},
    
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }

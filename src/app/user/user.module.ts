import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavComponent } from './Components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Pages/about/about.component';
import { FooterComponent } from './Components/footer/footer.component';
import { VerifyemailComponent } from './Pages/verifyemail/verifyemail.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ForgotPasswordComponent } from './Pages/forgotPassword/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './Pages/resetpassword/resetpassword.component';
import { SharedModule } from '../shared/shared.module';
import { LoaderComponent } from '../shared/component/loader/loader.component';
import { TestimonialComponent } from './Pages/testimonial/testimonial.component';
import { DonationAppealsComponent } from './Pages/donation-appeals/donation-appeals.component';
import { MeetTeemComponent } from './Pages/meet-teem/meet-teem.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';


@NgModule({
  declarations: [
    UserComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    FooterComponent,
    VerifyemailComponent,
    SidebarComponent,
    ForgotPasswordComponent,
    ResetpasswordComponent,
    TestimonialComponent,
    DonationAppealsComponent,
    MeetTeemComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule
  ],

})
export class UserModule { }

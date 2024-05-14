import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MyCasesComponent } from './Pages/my-cases/my-cases.component';
import { TeamsComponent } from './Pages/teams/teams.component';
import { TeamMembersComponent } from './Pages/team-members/team-members.component';
import { DonationAppealsComponent } from './Pages/donation-appeals/donation-appeals.component';
import { AppealVerificationComponent } from './Pages/appeal-verification/appeal-verification.component';
import { PayDonationsComponent } from './Pages/pay-donations/pay-donations.component';
import { MyProfileComponent } from './Pages/Profile/my-profile/my-profile.component';
import { EditProfileComponent } from './Pages/Profile/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    MemberComponent,
    DashboardComponent,
    NavComponent,
    MyCasesComponent,
    TeamsComponent,
    TeamMembersComponent,
    DonationAppealsComponent,
    AppealVerificationComponent,
    PayDonationsComponent,
    MyProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class MemberModule { }

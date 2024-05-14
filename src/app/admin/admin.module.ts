import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { AdminSignupComponent } from './Pages/admin-signup/admin-signup.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AllMembersComponent } from './Pages/member/all-members/all-members.component';
import { AddTeamComponent } from './Pages/team/add-team/add-team.component';
import { TeamsComponent } from './Pages/team/teams/teams.component';
import { AddTeamMemberComponent } from './Pages/teamMember/add-team-member/add-team-member.component';
import { TeamMembersComponent } from './Pages/teamMember/team-members/team-members.component';
import { DonationAppealsComponent } from './Pages/donation-appeals/donation-appeals.component';
import { AppealVerificationComponent } from './Pages/appeal-verification/appeal-verification.component';
import { AllTransactionsComponent } from './transactions/all-transactions/all-transactions.component';
import { SharedModule } from '../shared/shared.module';
import { MemberDetailsComponent } from './Pages/member/member-details/member-details.component';
import { TestimonialsComponent } from './Pages/testimonials/testimonials.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { SearchTransactionComponent } from './components/search-transaction/search-transaction.component';
import { TransactionWidgetComponent } from './components/transaction-widget/transaction-widget.component';
import { AppealTransactionsComponent } from './Pages/appeal-transactions/appeal-transactions.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { AllPartnerseekersComponent } from './Pages/all-partnerseekers/all-partnerseekers.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavComponent,
    AdminSignupComponent,
    AllMembersComponent,
    AddTeamComponent,
    TeamsComponent,
    AddTeamMemberComponent,
    TeamMembersComponent,
    DonationAppealsComponent,
    AppealVerificationComponent,
    AllTransactionsComponent,
    MemberDetailsComponent,
    TestimonialsComponent,
    ContactComponent,
    SearchTransactionComponent,
    TransactionWidgetComponent,
    AppealTransactionsComponent,
    BarChartComponent,
    AllPartnerseekersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
     SharedModule
  ],
  // providers:[ServiceService,CategoryService,BrandsService]

})
export class AdminModule { }

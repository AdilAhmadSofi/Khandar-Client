import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AdminSignupComponent } from './Pages/admin-signup/admin-signup.component';
import { AllMembersComponent } from './Pages/member/all-members/all-members.component';
import { TeamsComponent } from './Pages/team/teams/teams.component';
import { AddTeamComponent } from './Pages/team/add-team/add-team.component';
import { TeamMembersComponent } from './Pages/teamMember/team-members/team-members.component';
import { AddTeamMemberComponent } from './Pages/teamMember/add-team-member/add-team-member.component';
import { DonationAppealsComponent } from './Pages/donation-appeals/donation-appeals.component';
import { AppealVerificationComponent } from './Pages/appeal-verification/appeal-verification.component';
import { AllTransactionsComponent } from './transactions/all-transactions/all-transactions.component';
import { UserDetailsComponent } from '../shared/Pages/user-details/user-details.component';
import { MemberDetailsComponent } from './Pages/member/member-details/member-details.component';
import { TestimonialsComponent } from './Pages/testimonials/testimonials.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AppealTransactionsComponent } from './Pages/appeal-transactions/appeal-transactions.component';
import { MyTransactionsComponent } from '../shared/component/my-transactions/my-transactions.component';
import { ChangePasswordComponent } from '../shared/Pages/change-password/change-password.component';
import { AllPartnerseekersComponent } from './Pages/all-partnerseekers/all-partnerseekers.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'signup', component: AdminSignupComponent },
      { path: 'allMembers', component: AllMembersComponent },
      { path: 'team-member/:id', component: TeamMembersComponent },
      { path: 'team-member/add/:id', component: AddTeamMemberComponent },
      { path: 'donation-appeals', component: DonationAppealsComponent },
      { path: 'appeal-verification/:appealId/:teamAssignmentId', component: AppealVerificationComponent },
      { path: 'all-transactions', component: AllTransactionsComponent },
      {path:'user-details/:id',component:UserDetailsComponent},
      {path:'member-details/:id',component:MemberDetailsComponent},
      {path:'testimonials',component:TestimonialsComponent},
      {path:'contacts',component:ContactComponent},
      {path:'appeal-transactions/:appealId',component:AppealTransactionsComponent},
      {path:'my-transactions/:id',component:MyTransactionsComponent},
      {path:'change-password',component:ChangePasswordComponent},
      {path:'seekers',component:AllPartnerseekersComponent},



      {
        path: 'team',
        children: [
          { path: '', component: TeamsComponent },
          { path: 'add', component: AddTeamComponent },
        ],
      },

      // {
      //   path: 'team-member',
      //   children: [
      //     { path: '/:id', pathMatch:'full', component: TeamMembersComponent },
      //     { path: 'add/:id', component: AddTeamMemberComponent },
      //   ],
      // },
      // { path: 'brands', component: BrandsComponent },
      // { path: 'addBrand', component: AddBrandComponent },
      // { path: 'editBrand/:id', component: EditBrandComponent },
      // { path: 'addService', component: AddServiceComponent },
      // { path: 'editService/:id', component: EditServiceComponent },
      // { path: 'profile', component: ProfileComponent },
      // { path: 'customers', component: CustomersComponent },
      // { path: 'employees', component: EmployeesComponent },
      // { path: 'contact', component: ContactComponent },
      // {
      //   path: 'users',
      //   children: [
      //     { path: 'managers', component: ManagersComponent },
      //     { path: 'customers', component: OurCustomersComponent },
      //     { path: 'admins', component: AdminsComponent },
      //     { path: 'edit/:id', component: EditUserComponent },
      //   ],
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

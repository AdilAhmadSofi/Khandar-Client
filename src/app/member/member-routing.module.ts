import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { TeamsComponent } from './Pages/teams/teams.component';
import { TeamMembersComponent } from './Pages/team-members/team-members.component';
import { DonationAppealsComponent } from './Pages/donation-appeals/donation-appeals.component';
import { AppealVerificationComponent } from './Pages/appeal-verification/appeal-verification.component';
import { UserDetailsComponent } from '../shared/Pages/user-details/user-details.component';
import { MyTransactionsComponent } from '../shared/component/my-transactions/my-transactions.component';
import { ChangePasswordComponent } from '../shared/Pages/change-password/change-password.component';
import { PayDonationsComponent } from './Pages/pay-donations/pay-donations.component';
import { AddressesComponent } from '../shared/Pages/address/addresses/addresses.component';
import { AddAddressComponent } from '../shared/Pages/address/add-address/add-address.component';
import { MyProfileComponent } from './Pages/Profile/my-profile/my-profile.component';
import { EditProfileComponent } from './Pages/Profile/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'team-member/:id', component: TeamMembersComponent },
      { path: 'donation-appeals/:id/:role', component: DonationAppealsComponent },
      { path: 'appeal-verification/:id/:role', component: AppealVerificationComponent },
      {path:'pay-donation',component:PayDonationsComponent},
      {path:'user-details/:id',component:UserDetailsComponent},
      {path:'my-transactions',component:MyTransactionsComponent},
      {path:'change-password',component:ChangePasswordComponent},
      {path:'addresses',component:AddressesComponent},
      {path:'addAddress',component:AddAddressComponent},
      {path:'my-profile',children:[
        {path:'',component:MyProfileComponent},
        {path:'edit',component:EditProfileComponent},

      ]},


      // {
      //   path: 'category',
      //   children: [
      //     { path: '', component: CategoryComponent },
      //     { path: 'brands/:id', component: CategoryBrandComponent },
      //     { path: 'parts/:id', component: PartsComponent },
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
export class MemberRoutingModule { }

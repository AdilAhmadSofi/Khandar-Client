import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerseekerComponent } from './partnerseeker.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { MyDetailsComponent } from './Pages/myProfile/my-details/my-details.component';
import { AllPartnerSeekersComponent } from './Pages/all-partner-seekers/all-partner-seekers.component';
import { EditProfileComponent } from './Pages/myProfile/edit-profile/edit-profile.component';
import { AddressesComponent } from '../shared/Pages/address/addresses/addresses.component';
import { QualificationsComponent } from './Pages/qualification/qualifications/qualifications.component';
import { AddQualificationComponent } from './Pages/qualification/add-qualification/add-qualification.component';
import { SentProposalComponent } from './Pages/proposal/sent-proposal/sent-proposal.component';
import { RecievedProposalsComponent } from './Pages/proposal/recieved-proposals/recieved-proposals.component';
import { AcceptedProposalsComponent } from './Pages/proposal/accepted-proposals/accepted-proposals.component';
import { AddJobHistoryComponent } from './Pages/jobHistory/add-job-history/add-job-history.component';
import { JobHistoriesComponent } from './Pages/jobHistory/job-histories/job-histories.component';
import { PartnerDetailsComponent } from './Pages/partner-details/partner-details.component';
import { AddAppealComponent } from './Pages/donationAppeal/add-appeal/add-appeal.component';
import { MyAppealComponent } from './Pages/donationAppeal/my-appeal/my-appeal.component';
import { HobbiesComponent } from './Pages/hobbies/hobbies/hobbies.component';
import { AddHobbyComponent } from './Pages/hobbies/add-hobby/add-hobby.component';
import { AddAddressComponent } from '../shared/Pages/address/add-address/add-address.component';
import { SocialmediaComponent } from './Pages/socialMedia/socialmedia/socialmedia.component';
import { AddSocialmediaComponent } from './Pages/socialMedia/add-socialmedia/add-socialmedia.component';
import { TestimonialsComponent } from './Pages/testimonials/testimonials.component';
import { MyTransactionsComponent } from '../shared/component/my-transactions/my-transactions.component';
import { ChangePasswordComponent } from '../shared/Pages/change-password/change-password.component';
import { PayDonationsComponent } from './Pages/pay-donations/pay-donations.component';

const routes: Routes = [
  {
    path: '',
    component: PartnerseekerComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {path:'myProfile',component:MyDetailsComponent},
      {path:'editprofile',component:EditProfileComponent},
      {path:'seeker',component:AllPartnerSeekersComponent},
      {path:'addresses',component:AddressesComponent},
      {path:'addAddress',component:AddAddressComponent},
      {path:'qualifications',component:QualificationsComponent},
      {path:'addQualification',component:AddQualificationComponent},
      {path:'addJobHistories',component:AddJobHistoryComponent},
      {path:'jobHistories',component:JobHistoriesComponent},
      {path:'hobbies',component:HobbiesComponent},
      {path:'add-hobby',component:AddHobbyComponent},
      {path:'sentProposals',component:SentProposalComponent},
      {path:'recievedProposals',component:RecievedProposalsComponent},
      {path:'acceptedProposals',component:AcceptedProposalsComponent},
      {path:'partnerDetails/:id',component:PartnerDetailsComponent},
      {path:'add-appeal',component:AddAppealComponent},
      {path:'my-appeal',component:MyAppealComponent},
      {path:'pay-donation',component:PayDonationsComponent},
      {path:'socialMedias',component:SocialmediaComponent},
      {path:'add-socialMedia',component:AddSocialmediaComponent},
      {path:'testimonials',component:TestimonialsComponent},
      {path:'my-transactions',component:MyTransactionsComponent},
      {path:'change-password',component:ChangePasswordComponent},

      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerseekerRoutingModule { }

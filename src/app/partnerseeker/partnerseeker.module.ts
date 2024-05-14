import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerseekerRoutingModule } from './partnerseeker-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PartnerseekerComponent } from './partnerseeker.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AllPartnerSeekersComponent } from './Pages/all-partner-seekers/all-partner-seekers.component';
import { MyDetailsComponent } from './Pages/myProfile/my-details/my-details.component';
import { EditProfileComponent } from './Pages/myProfile/edit-profile/edit-profile.component';
import { QualificationsComponent } from './Pages/qualification/qualifications/qualifications.component';
import { JobHistoriesComponent } from './Pages/jobHistory/job-histories/job-histories.component';
import { PreferencesComponent } from './Pages/partnerPreference/preferences/preferences.component';

import { AddQualificationComponent } from './Pages/qualification/add-qualification/add-qualification.component';
import { QualificationTypePipe } from '../Pipes/qualification-type.pipe';
import { SentProposalComponent } from './Pages/proposal/sent-proposal/sent-proposal.component';
import { AddHobbyComponent } from './Pages/hobbies/add-hobby/add-hobby.component';
import { HobbiesComponent } from './Pages/hobbies/hobbies/hobbies.component';
import { RecievedProposalsComponent } from './Pages/proposal/recieved-proposals/recieved-proposals.component';
import { AcceptedProposalsComponent } from './Pages/proposal/accepted-proposals/accepted-proposals.component';
import { AddJobHistoryComponent } from './Pages/jobHistory/add-job-history/add-job-history.component';
import { PartnerDetailsComponent } from './Pages/partner-details/partner-details.component';
import { AddAppealComponent } from './Pages/donationAppeal/add-appeal/add-appeal.component';
import { MyAppealComponent } from './Pages/donationAppeal/my-appeal/my-appeal.component';
import { MaterialModule } from '../material/material.module';
import { AddSocialmediaComponent } from './Pages/socialMedia/add-socialmedia/add-socialmedia.component';
import { SocialmediaComponent } from './Pages/socialMedia/socialmedia/socialmedia.component';
import { TestimonialsComponent } from './Pages/testimonials/testimonials.component';
import { PayDonationsComponent } from './Pages/pay-donations/pay-donations.component';


@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
    PartnerseekerComponent,
    AllPartnerSeekersComponent,
    MyDetailsComponent,
    EditProfileComponent,
    QualificationsComponent,
    JobHistoriesComponent,
    PreferencesComponent,
    AddQualificationComponent,
    QualificationTypePipe,
    SentProposalComponent,
    AddHobbyComponent,
    HobbiesComponent,
    RecievedProposalsComponent,
    AcceptedProposalsComponent,
    AddJobHistoryComponent,
    PartnerDetailsComponent,
    AddAppealComponent,
    MyAppealComponent,
    AddSocialmediaComponent,
    SocialmediaComponent,
    TestimonialsComponent,
    PayDonationsComponent,
  ],
  imports: [
    CommonModule,
    PartnerseekerRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModule
  ]
})
export class PartnerseekerModule { }

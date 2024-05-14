import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddressesComponent } from './Pages/address/addresses/addresses.component';
import { AddAddressComponent } from './Pages/address/add-address/add-address.component';
import { HeightPipe } from '../Pipes/height.pipe';
import { BodyTypePipe } from '../Pipes/body-type.pipe';
import {  } from '../Pipes/body-type.pipe';
import { AnnualIncomePipe } from '../Pipes/annual-income.pipe';
import { ComplexionPipe } from '../Pipes/complexion.pipe';
import { ReligiousPipe } from '../Pipes/religious.pipe';
import { DisabilityPipe } from '../Pipes/disability.pipe';
import { FamilyStatusPipe } from '../Pipes/family-status.pipe';
import { ParentStatusPipe } from '../Pipes/parent-status.pipe';
import { ProposalStatusPipe } from '../Pipes/proposal-status.pipe';
import { PayDonationComponent } from './pay-donation/pay-donation.component';
import { DonationAppealStatusPipe } from '../Pipes/donation-appeal-status.pipe';
import { MemberInvolvementPipe } from '../Pipes/member-involvement.pipe';
import { MemberTypePipe } from '../Pipes/member-type.pipe';
import { GenderPipe } from '../Pipes/gender.pipe';
import { NativelanguagePipe } from '../Pipes/nativelanguage.pipe';
import { MaritalStatusPipe } from '../Pipes/marital-status.pipe';
import { WorkingSectorPipe } from '../Pipes/working-sector.pipe';
import { ReligionPipe } from '../Pipes/religion.pipe';
import { RemarksPipe } from '../Pipes/remarks.pipe';
import { SocialmediaNamePipe } from '../Pipes/socialmedia-name.pipe';
import { UserDetailsComponent } from './Pages/user-details/user-details.component';
import { MyTransactionsComponent } from './component/my-transactions/my-transactions.component';
import { ChangePasswordComponent } from './Pages/change-password/change-password.component';
import { LoaderComponent } from './component/loader/loader.component';
import { HobbiesPipe } from '../Pipes/hobbies.pipe';



@NgModule({
  declarations: [
    AddressesComponent,
    AddAddressComponent,
    HeightPipe,
    BodyTypePipe,
    AnnualIncomePipe,
    ComplexionPipe,
    ReligiousPipe,
    DisabilityPipe,
    FamilyStatusPipe,
    ParentStatusPipe,
    ProposalStatusPipe,
    PayDonationComponent,
    DonationAppealStatusPipe,
    MemberInvolvementPipe,
    MemberTypePipe,
    GenderPipe,
    NativelanguagePipe,
    MaritalStatusPipe,
    ReligiousPipe,
    ReligionPipe,
    WorkingSectorPipe,
    RemarksPipe,
    SocialmediaNamePipe,
    UserDetailsComponent,
    MyTransactionsComponent,
    ChangePasswordComponent,
    LoaderComponent,
    HobbiesPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AddressesComponent,
    AddAddressComponent,
    HeightPipe,
    BodyTypePipe,
    AnnualIncomePipe,
    ComplexionPipe,
    ReligiousPipe,
    DisabilityPipe,
    FamilyStatusPipe,
    ParentStatusPipe,
    ProposalStatusPipe,
    PayDonationComponent,
    DonationAppealStatusPipe,
    MemberInvolvementPipe,
    MemberTypePipe,
    GenderPipe,
    MaritalStatusPipe,
    NativelanguagePipe,
    ReligiousPipe,
    ReligionPipe,
    WorkingSectorPipe,
    RemarksPipe,
    SocialmediaNamePipe,
    ChangePasswordComponent,
    UserDetailsComponent,
    MyTransactionsComponent,
    LoaderComponent,
    HobbiesPipe

  ]
    ,
  
 providers:[]
})
export class SharedModule { }

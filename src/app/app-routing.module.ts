import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { AdminGuard } from './Security/admin.guard';
import { PartnerseekerModule } from './partnerseeker/partnerseeker.module';
import { PartnerseekerGuard } from './Security/partnerseeker.guard';
import { AdminModule } from './admin/admin.module';
import { MemberModule } from './member/member.module';
import { MemberGuard } from './Security/member.guard';


const routes: Routes = [
  {path:"",loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:"admin",loadChildren:()=>AdminModule,canActivate:[AdminGuard]},
  {path:"partnerseeker",loadChildren:()=>PartnerseekerModule,canActivate:[PartnerseekerGuard]},
  {path:"member",loadChildren:()=>MemberModule,canActivate:[MemberGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

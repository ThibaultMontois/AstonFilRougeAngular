import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrivacyStatementComponent } from './components/privacy-statement/privacy-statement.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { TeamComponent } from './components/team/team.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ClubComponent } from './components/clublist/club/club.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login', children: [
      { path: 'forget', component: ForgetPasswordComponent },
      { path: '', component: UserLoginComponent }
    ]
  },
  {
    path: 'admin', children: [
      { path: 'userList', component: UserListComponent },
      { path: '', component: AdminComponent }
    ]
  },
  { path: 'team', component: TeamComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'privacy-statement', component: PrivacyStatementComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'tarif', component: TarifComponent },
  { path: 'clubList', component: ClubComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

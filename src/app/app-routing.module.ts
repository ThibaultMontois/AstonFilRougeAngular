import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrivacyStatementComponent } from './components/privacy-statement/privacy-statement.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'privacy-statement', component: PrivacyStatementComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

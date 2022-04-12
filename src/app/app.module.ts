import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyStatementComponent } from './components/privacy-statement/privacy-statement.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TablePresentationComponent } from './components/home/table-presentation/table-presentation.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AuthUserService } from './services/auth-user.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { teamcardsComponent } from './components/team-cards/team-cards.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ClublistComponent } from './components/clublist/clublist.component';
import { ClubComponent } from './components/clublist/club/club.component';
import { TeamComponent } from './components/team/team.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { DeleteUserComponent } from './components/admin/delete-user/delete-user.component';
import { UserComponent } from './components/user/user.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TermsAndConditionsComponent,
    PrivacyStatementComponent,
    LegalNoticeComponent,
    NotFoundComponent,
    TablePresentationComponent,
    UserLoginComponent,
    ForgetPasswordComponent,
    RegistrationComponent,
    teamcardsComponent,
    CarouselComponent,
    TeamComponent,
    TarifComponent,
    ClublistComponent,
    ClubComponent,
    CoursesPageComponent,
    AdminComponent,
    UserListComponent,
    DeleteUserComponent,
    UserComponent,
    ReservationPageComponent,
    ReservationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthUserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

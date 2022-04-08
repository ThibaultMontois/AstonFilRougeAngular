import { Component } from '@angular/core';
import { AuthUser } from './models/auth-user.model';
import { AuthUserService } from './services/auth-user.service';
import { FakeAuthUserService } from './services/fake-auth-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AstonFilRougeAngular';

  authUser: AuthUser | null;

  constructor(private authUserService: FakeAuthUserService) {
    this.authUser = this.authUserService.user;
  }

  logOut(_isLogOutButtonClicked: Boolean) {
    this.authUserService.logout();
    window.location.reload();
  }
}

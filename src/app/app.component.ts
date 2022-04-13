import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from './models/auth-user.model';
import { AuthUserService } from './services/auth-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AstonFilRougeAngular';

  authUser: AuthUser | null;

  constructor(private authUserService: AuthUserService, private router: Router) {
    this.authUser = this.authUserService.user;
  }

  logOut(_isLogOutButtonClicked: Boolean) {
    this.authUserService.logout();
    this.router.navigate(['']).then(() => { window.location.reload(); });
  }
}

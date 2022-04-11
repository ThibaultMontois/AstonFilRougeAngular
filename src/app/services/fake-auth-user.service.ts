import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Role } from '../enums/role.enum';
import { AuthUser } from '../models/auth-user.model';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthUserService {

  private authUser: AuthUser | null;
  private userSubject: BehaviorSubject<AuthUser | null>;

  constructor() {
    const data: string | null = localStorage.getItem('auth_user');
    if (data) {
      this.authUser = JSON.parse(data); 
    }
    else {
      this.authUser = null;
    }
    this.userSubject = new BehaviorSubject<AuthUser | null>(this.authUser);
  }

  get user(): AuthUser | null {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<AuthUser | null> {

    switch (email + ' ' + password) {
      case 'member@example.com member':
        this.authUser = new AuthUser(email, Role.Member);
        break;
      case 'coach@example.com coach':
        this.authUser = new AuthUser(email, Role.Coach);
        break;
      case 'manager@example.com manager':
        this.authUser = new AuthUser(email, Role.Manager);
        break;
      case 'super.admin@example.com superadmin':
        this.authUser = new AuthUser(email, Role.SuperAdmin);
        break;
      default:
        this.authUser = null;
        break;
    }

    if (this.authUser) localStorage.setItem('auth_user', JSON.stringify(this.authUser));

    return of<AuthUser | null>(this.authUser);
  }

  logout(): void {
    localStorage.removeItem('auth_user');
    this.authUser = null;
    this.userSubject.next(this.authUser);
  }
}

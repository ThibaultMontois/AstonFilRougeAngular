import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Role } from '../enums/role.enum';
import { AuthUser } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthUserService {

  private authUser: AuthUser | null;
  private userSubject: BehaviorSubject<AuthUser | null>;

  constructor() {
    this.authUser = null;
    this.userSubject = new BehaviorSubject<AuthUser | null>(null);
    const data: string | null = localStorage.getItem('auth_user');
    if (data) {
      this.authUser = JSON.parse(data); 
    }
    else {
      this.login('','');
    }
    this.userSubject.next(this.authUser);
  }

  get user(): AuthUser | null {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<AuthUser | null> {

    switch (email + ' ' + password) {
      case 'member@example.com member':
        this.authUser = new AuthUser(email, Role.Member, new Date(Date.now() + 1800000));
        break;
      case 'coach@example.com coach':
        this.authUser = new AuthUser(email, Role.Coach, new Date(Date.now() + 1800000));
        break;
      case 'manager@example.com manager':
        this.authUser = new AuthUser(email, Role.Manager, new Date(Date.now() + 1800000));
        break;
      case 'super.admin@example.com superadmin':
        this.authUser = new AuthUser(email, Role.SuperAdmin, new Date(Date.now() + 1800000));
        break;
      default:
        this.authUser = new AuthUser();
        break;
    }

    localStorage.setItem('auth_user', JSON.stringify(this.authUser));

    return of<AuthUser | null>(this.authUser);
  }

  logout(): void {
    this.login('','');
    this.userSubject.next(this.authUser);
  }
}

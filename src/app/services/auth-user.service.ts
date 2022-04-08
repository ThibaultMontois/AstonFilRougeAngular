import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthUser, JWT } from '../models/auth-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private apiUrl: string = environment.apiUrl;
  private userSubject: BehaviorSubject<AuthUser | null>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<AuthUser | null>(null);
    const data: string | null = localStorage.getItem('auth_user');
    if (data) {
      const authUser: AuthUser = JSON.parse(data);
      this.userSubject.next(authUser);
    }
  }

  get user(): AuthUser | null {
    return this.userSubject.value;
  }

  getToken(): JWT | null {
    const jwt_token: string | null = localStorage.getItem('jwt_token');
    return jwt_token ? JSON.parse(jwt_token) : null;
  }

  login(email: string, password: string): Observable<AuthUser | null> {
    const data = {
      email: email,
      password: password
    }

    return this.http.post<JWT>(`${this.apiUrl}/authenticate`, data)
      .pipe(tap(data => console.log(data)))
      .pipe(map((data: JWT): AuthUser | null => {

        const jwt: JWT = new JWT();
        Object.assign(jwt, data);

        const authUser: AuthUser | null = jwt.getPayload();
        if (authUser) {
          localStorage.setItem('auth_user', JSON.stringify(authUser));
          localStorage.setItem('jwt_token', JSON.stringify(jwt));
        }
        return authUser;
      }));
  }

  logout(): void {
    localStorage.removeItem('auth_user');
    localStorage.removeItem('jwt_token');
    this.userSubject.next(null);
  }
}

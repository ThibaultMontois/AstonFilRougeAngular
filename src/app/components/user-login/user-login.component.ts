import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUser, JWT } from 'src/app/models/auth-user.model';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private location: Location, private authUserService: AuthUserService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(2)
      ]]
    });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) return;

    const email: string = this.formGroup.value.email;
    const password: string = this.formGroup.value.password;

    this.authUserService.login(email, password).subscribe((response: any) => {
      if (response) {
        const jwt: JWT = new JWT(response.token, response.expiresAt);
        const authUser: AuthUser | null = jwt.getAuthUser();
        localStorage.setItem('jwt_token', JSON.stringify(jwt));
        localStorage.setItem('auth_user', JSON.stringify(authUser));
        this.router.navigate(['']).then(() => { window.location.reload(); });
      }
    });
  }

  onCancel(): void {
    this.location.back();
  }
}

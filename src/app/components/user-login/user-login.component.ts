import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/auth.model';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { FakeAuthUserService } from 'src/app/services/fake-auth-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private location: Location, private authUserService: FakeAuthUserService, private router: Router) { }

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

    this.authUserService.login(email, password).subscribe((user: AuthUser | null) => {
      if (user) this.router.navigate(['']);
    });
  }

  onCancel(): void {
    this.location.back();
  }
}

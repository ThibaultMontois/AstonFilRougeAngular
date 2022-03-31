import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
        Validators.required
      ]],
      birthDate: ['', [
        Validators.required
      ]],
      street: ['', [
        Validators.required
      ]],
      complement: ['', [
        Validators.required
      ]],
      zipCode: ['', [
        Validators.required
      ]],
      city: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phoneNumber: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      cguv: ['', [
        Validators.requiredTrue
      ]],
    });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) return;




    const email: string = this.formGroup.value.email;

    // TO DO
  }

  onCancel(): void {
    this.location.back();
  }
}

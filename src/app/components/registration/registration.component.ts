import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/enums/role.enum';
import { Address } from 'src/app/models/address.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
        Validators.required
      ]],
      birthDate: ['', [
        Validators.nullValidator
      ]],
      number: ['', [
        Validators.nullValidator
      ]],
      street: ['', [
        Validators.required
      ]],
      complement: ['', [
        Validators.nullValidator
      ]],
      zipCode: ['', [
        Validators.required,
        Validators.pattern("^[0-9]{5}$")
      ]],
      city: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]],
      phoneNumber: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern("^([+]([0-9]{2})[1-9]|[0][1-9])[0-9]{8}$")
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

    const firstName: string = this.formGroup.value.firstName;
    const lastName: string = this.formGroup.value.lastName;
    const birthDate: Date | null = this.formGroup.value.birthDate;
    const number: number | null = this.formGroup.value.number;
    const street: string = this.formGroup.value.street;
    const complement: string | null = this.formGroup.value.complement;
    const zipCode: string = this.formGroup.value.zipCode;
    const city: string = this.formGroup.value.city;
    const email: string = this.formGroup.value.email;
    const phoneNumber: string = this.formGroup.value.phoneNumber;
    const password: string = this.formGroup.value.password;
    const passwordConf: string = this.formGroup.value.passwordConf;

    if (password !== passwordConf) return;

    let address: Address = new Address(0, street, zipCode, city, number, complement);
    let user: User = new User(0, firstName, lastName, password, email, phoneNumber, address, birthDate, Role.Member);

    // TO DO
  }

  onCancel(): void {
    this.router.navigate(['']);
  }
}

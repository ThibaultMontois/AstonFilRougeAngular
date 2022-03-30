import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]]
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

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Reservation } from 'src/app/models/reservation.model';
import { User } from 'src/app/models/user.model';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  formGroup!: FormGroup;

  user!: User;
  courseList: Course[];

  constructor(private fb: FormBuilder, private dbService: DatabaseService, private authService: AuthUserService, private router: Router, private location: Location) {
    this.courseList = [];
  }

  ngOnInit(): void {
    this.getCourseList();
    this.formGroup = this.fb.group({
      selectedCourseId: ['', [
        Validators.required
      ]]
    })
  }

  getCourseList(): void {
    let now = new Date();
    this.dbService.getCourseListByDate(now).subscribe((list: any) => {
      list.courseList.forEach((c: any) => {
        this.courseList.push(new Course(c.id, c.type, c.date, c.startHour, c.endHour, c.status, c.clubId, c.coachId, c.limit, c.title, c.description));
      })
    });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) return;

    const selectedCourseId: number = this.formGroup.value.selectedCourseId;
    const email: string | null = this.authService.user!.email;

    if (email) {
      this.GetUser(email);
      setTimeout(() => { this.CreateReservation(this.user, selectedCourseId) }, 400);
    }
  }

  GetUser(email: string): void {
    this.dbService.getUserByEmail(email).subscribe((response: any) => {
      let u = response.user;
      this.user = new User(u.id, u.firstName, u.lastName, u.password, u.email, u.phoneNumber, u.role, u.addressId, u.birthDate, u.clubId, u.job, u.description, u.avatarUrl, u.creationDate, u.updateDate);
    });
  }

  CreateReservation(user: User, courseId: number): void {
    let resa: Reservation = new Reservation(0, user.id, courseId, 2);
    this.dbService.createReservation(resa).subscribe((response: any) => {
      if (response && response.reservationId) this.location.back();
    });
  }

  onCancel(): void {
    this.location.back();
  }
}



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/auth-user.model';
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
  courseList?: Course[];
  private authUser?: AuthUser | null = this.authService.user;

  constructor(private fb: FormBuilder, private dbService: DatabaseService, private authService: AuthUserService, private router: Router) { }

  ngOnInit(): void {
    this.getCourseList();
    this.formGroup = this.fb.group({
      selectedCourse: ['', [
        Validators.required
      ]]
    })
  }

  getCourseList(): void {
    let now = new Date();
    this.dbService.getCourseListByDate(now).subscribe(list => {
      this.courseList = list.courseList;
    });

  }

  onSubmit(): void {


    let selectedCourse: number = this.formGroup.value.selectedId;
    let user: User;

    if (this.authUser?.email != null) {

      this.dbService.getUserByEmail(this.authUser.email).subscribe(client => {
        console.log(selectedCourse);
        user = client;
        let resa: Reservation = new Reservation(0, user.id, selectedCourse);
        console.log(resa);

        this.dbService.createReservation(resa).subscribe((response: any) => {
          console.log(resa);
          this.router.navigate(['../reservation'])
        });
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['../reservation']);
  }
}



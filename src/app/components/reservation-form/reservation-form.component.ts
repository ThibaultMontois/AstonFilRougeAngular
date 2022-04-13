import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  private courseList?: Course[];
  private authUser?: AuthUser | null = this.authService.user;
  constructor(private fb: FormBuilder, private dbService: DatabaseService, private authService: AuthUserService, private router: Router) { }

  ngOnInit(): void {
    this.getCourseList();
  }

  getCourseList(): void {
    this.dbService.getCourseList().subscribe(courseList => this.courseList);

  }

  onSubmit(): void {
    const selectedCourse: number = this.formGroup.value.selectedId;

    let user: User;

    if(this.authUser?.email!=null){
      this.dbService.getUserByEmail(this.authUser.email).subscribe(client => {

        user = client
        let resa: Reservation = new Reservation(0, user.id, selectedCourse);
        this.dbService.createReservation(resa);
      });
    }
   
  }

  onCancel(): void {
    this.router.navigate(['']);
  }
}



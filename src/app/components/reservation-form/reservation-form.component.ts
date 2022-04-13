import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { Reservation } from 'src/app/models/reservation.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  formGroup! : FormGroup;
  private courseList? : Course[];
  constructor(private fb: FormBuilder, private dbService : DatabaseService) { }

  ngOnInit(): void {
    this.getCourseList();
  }

  getCourseList(): void{
    this.dbService.getCourseList().subscribe(courseList  => this.courseList);
    
  }

  onSubmit() : void{
    const selectedCourse : number = this.formGroup.value.selectedId;
    const requestedDate :Date = this.formGroup.value.requestDate;

    const resa : Reservation = new Reservation(courseId=selectedCourse);
    this.dbService.createReservation(resa);
  }

}

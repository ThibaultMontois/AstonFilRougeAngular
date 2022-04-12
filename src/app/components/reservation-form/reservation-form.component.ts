import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  formGroup! : FormGroup;
  private courseList? : Course[];
  private selectedCourse?: number;
  constructor(private fb: FormBuilder, private dbService : DatabaseService) { }

  ngOnInit(): void {
    this.getCourseList();
    this.formGroup =this.fb.group({
      

    });
  }

  getCourseList(): void{
    this.dbService.getCourseList().subscribe(courseList  => this.courseList);
    
  }

  createReservation() : void{
    this.dbService.createReservation();
  }

}

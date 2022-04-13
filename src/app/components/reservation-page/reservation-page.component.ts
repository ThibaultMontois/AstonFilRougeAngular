import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club.model';
import { Course } from 'src/app/models/course.model';
import { Reservation } from 'src/app/models/reservation.model';
import { User } from 'src/app/models/user.model';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { DatabaseService } from 'src/app/services/database.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss']
})
export class ReservationPageComponent implements OnInit {

  

  user!: User;
  resaList: Reservation[];
  courseList: Course[];
  clubList: Club[];
  coachList: User[];

  constructor(private dbService: DatabaseService, private authUserService: AuthUserService) {
    this.resaList = [];
    this.courseList = [];
    this.clubList = [];
    this.coachList = [];
  }

  ngOnInit(): void {
    const email: string | null = this.authUserService.user!.email;
    if (email) {
      this.GetUser(email);
      setTimeout(() => { if (this.user) this.GetResaList() }, 200);
      setTimeout(() => { if (this.resaList.length > 0) this.GetCourseList() }, 400);
      setTimeout(() => {
        if (this.courseList.length > 0) {
          this.GetClubList();
          this.GetCoachList();
        }
      }, 600);
    }
  }

  GetUser(email: string): void {
    this.dbService.getUserByEmail(email).subscribe((response: any) => {
      let u = response.user;
      this.user = new User(u.id, u.firstName, u.lastName, u.password, u.email, u.phoneNUmber, u.role, u.addressId, u.birthDate, u.clubId, u.job, u.description, u.avatarUrl, u.creationDate, u.updateDate);
    });
  }

  GetResaList(): void {
    this.dbService.getReservationList().subscribe((response: any) => {
      response.reservationList.forEach((r: any) => {
        if (r.clientId === this.user.id) {
          this.resaList.push(new Reservation(r.id, r.clientId, r.courseId, r.status));
        }
      });
    });
  }

  GetCourseList(): void {
    this.resaList.forEach(r => {
      this.dbService.getCourseById(r.courseId).subscribe((response: any) => {
        let c = response.course;
        this.courseList.push(new Course(c.id, c.type, c.date, c.startHour, c.endHour, c.status, c.clubId, c.coachId, c.limit, c.title, c.description));
      });
    });
  }

  GetClubList(): void {
    this.courseList.forEach(co => {
      this.dbService.getClubById(co.clubId).subscribe((response: any) => {
        let c = response.club;
        this.clubList.push(new Club(c.id, c.name, c.addressId, c.phoneNumber, c.capacity, c.openingWeekDays, c.exceptionalClosures, c.planning))
      });
    });
  }

  GetCoachList(): void {
    this.courseList.forEach(c => {
      this.dbService.getUserById(c.coachId).subscribe((response: any) => {
        let u = response.user;
        this.coachList.push(new User(u.id, u.firstName, u.lastName, u.password, u.email, u.phoneNUmber, u.role, u.addressId, u.birthDate, u.clubId, u.job, u.description, u.avatarUrl, u.creationDate, u.updateDate));
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.model';
import { User } from 'src/app/models/user.model';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss']
})
export class ReservationPageComponent implements OnInit {

  user!: User;
  resaList: Reservation[];

  constructor(private dbService: DatabaseService, private authUserService: AuthUserService) {
    this.resaList = [];
  }

  ngOnInit(): void {
    const email: string | null = this.authUserService.user!.email;
    if (email) {
      this.GetUser(email);
      setTimeout(() => { if (this.user) this.GetAllUserResa() }, 1000);     
    }
  }

  GetUser(email: string): void {
    this.dbService.getUserByEmail(email).subscribe((response: any) => {
      var u = response.user;
      this.user = new User(u.id, u.firstName, u.lastName, u.password, u.email, u.phoneNUmber, u.role, u.addressId, u.birthDate, u.clubId, u.job, u.description, u.avatarUrl, u.creationDate, u.updateDate);
    });
  }

  GetAllUserResa(): void {
    this.dbService.getReservationList().subscribe((response: any) => {
      response.reservationList.forEach((element: any) => {
        if (element.clientId === this.user.id) {
          this.resaList.push(new Reservation(element.id, element.clientId, element.courseId, element.status));
        }
      });
    });
  }
}

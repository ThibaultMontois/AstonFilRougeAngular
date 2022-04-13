import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.model';
import { User } from 'src/app/models/user.model';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss']
})
export class ReservationPageComponent implements AfterContentInit {

  user!: User | null;
  resaList: Reservation[];

  constructor(private dbService: DatabaseService, private authUserService: AuthUserService) {
    this.resaList = [];
  }

  ngOnInit(): void {

   }

  ngAfterContentInit(): void {
    const email: string | null = this.authUserService.user!.email;
    if (email) this.GetUser(email).then((user: User | null) => this.GetAllUserResa(user));
  }

  async GetUser(email: string): Promise<User | null> {
    this.dbService.getUserByEmail(email).subscribe((response: any) => {
      var u = response.user;
      this.user = new User(u.id, u.firstName, u.lastName, u.password, u.email, u.phoneNUmber, u.role, u.addressId, u.birthDate, u.clubId, u.job, u.description, u.avatarUrl, u.creationDate, u.updateDate);
    });    
    return Promise.resolve(this.user);
  }

  GetAllUserResa(user: User | null): void {
    if (user) this.dbService.getReservationList().subscribe((response: any) => {
      response.forEach((element: any) => {
        if (element.clientId === user.id) {
          // this.resaList.push(new Reservation(element.i...));
        }
      });
    })
  }
}

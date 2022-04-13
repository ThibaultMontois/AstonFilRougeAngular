import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss']
})
export class ReservationPageComponent implements OnInit {

  private resaList? : Reservation[];


  constructor(private dbService : DatabaseService) { }

  ngOnInit(): void {
    this.GetAllUserResa();
  }

  GetAllUserResa() : void{
    this.dbService.getReservationList().subscribe(reservationList => this.resaList=reservationList);
  }

}

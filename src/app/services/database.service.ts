import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address.model';
import { Club } from '../models/club.model';
import { Course } from '../models/course.model';
import { OpeningDay } from '../models/opening-day.model';
import { Reservation } from '../models/reservation.model';
import { Subscription } from '../models/subscription.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Address
  createAddress(address: Address): Observable<any> {
    return this.http.post(`${this.apiUrl}/address/create`, address);
  }

  getAddressList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/address/getall`);
  }

  getAddress(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/address/get/${id}`);
  }

  updateAddress(id: number, address: Address): Observable<any> {
    return this.http.patch(`${this.apiUrl}/address/update/${id}`, address);
  }

  deleteAddress(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/address/delete/${id}`);
  }

  // Club
  createClub(club: Club): Observable<any> {
    return this.http.post(`${this.apiUrl}/club/create`, club);
  }

  getClubList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/club/getall`);
  }

  getClub(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/club/get/${id}`);
  }

  updateClub(id: number, club: Club): Observable<any> {
    return this.http.patch(`${this.apiUrl}/club/update/${id}`, club);
  }

  deleteClub(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/club/delete/${id}`);
  }

  // Course
  createCourse(course: Course): Observable<any> {
    return this.http.post(`${this.apiUrl}/course/create`, course);
  }

  getCourseList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/course/getall`);
  }

  getCourse(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/course/get/${id}`);
  }

  updateCourse(id: number, course: Course): Observable<any> {
    return this.http.patch(`${this.apiUrl}/course/update/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/course/delete/${id}`);
  }

  // OpeningDay
  createOpeningDay(openingDay: OpeningDay): Observable<any> {
    return this.http.post(`${this.apiUrl}/openingday/create`, openingDay);
  }

  getOpeningDayLIst(): Observable<any> {
    return this.http.get(`${this.apiUrl}/openingday/getall`);
  }

  getOpeningDay(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/openingday/get/${id}`);
  }

  updateOpeningDay(id: number, openingDay: OpeningDay): Observable<any> {
    return this.http.patch(`${this.apiUrl}/openingday/update/${id}`, openingDay);
  }

  deleteOpeningDay(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/openingday/delete/${id}`);
  }

  // Reservation
  createReservation(reservation: Reservation): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservation/create`, reservation);
  }

  getReservationList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reservation/getall`);
  }

  getReservation(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/reservation/get/${id}`);
  }

  updateReservation(id: number, reservation: Reservation): Observable<any> {
    return this.http.patch(`${this.apiUrl}/reservation/update/${id}`, reservation);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservation/delete/${id}`);
  }

  // Subscription
  createSubscription(subscription: Subscription): Observable<any> {
    return this.http.post(`${this.apiUrl}/subscription/create`, subscription);
  }

  getSubscriptionList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/subscription/getall`);
  }

  getSubscription(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/subscription/get/${id}`);
  }

  updateSubscription(id: number, subscription: Subscription): Observable<any> {
    return this.http.patch(`${this.apiUrl}/subscription/update/${id}`, subscription);
  }

  deleteSubscription(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/subscription/delete/${id}`);
  }

  // User
  createUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/create`, user);
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/getall`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/get/${id}`);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.patch(`${this.apiUrl}/user/update/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/delete/${id}`);
  }
}

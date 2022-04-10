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
  createAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(`${this.apiUrl}/address/create`, address);
  }

  getAddressList(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.apiUrl}/address/getall`);
  }

  getAddress(id: number): Observable<Address> {
    return this.http.get<Address>(`${this.apiUrl}/address/get/${id}`);
  }

  updateAddress(id: number, address: Address): Observable<Address> {
    return this.http.patch<Address>(`${this.apiUrl}/address/update/${id}`, address);
  }

  deleteAddress(id: number): Observable<Address> {
    return this.http.delete<Address>(`${this.apiUrl}/address/delete/${id}`);
  }

  // Club
  createClub(club: Club): Observable<Club> {
    return this.http.post<Club>(`${this.apiUrl}/club/create`, club);
  }

  getClubList(): Observable<Club[]> {
    return this.http.get<Club[]>(`${this.apiUrl}/club/getall`);
  }

  getClub(id: number): Observable<Club> {
    return this.http.get<Club>(`${this.apiUrl}/club/get/${id}`);
  }

  updateClub(id: number, club: Club): Observable<Club> {
    return this.http.patch<Club>(`${this.apiUrl}/club/update/${id}`, club);
  }

  deleteClub(id: number): Observable<Club> {
    return this.http.delete<Club>(`${this.apiUrl}/club/delete/${id}`);
  }

  // Course
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/course/create`, course);
  }

  getCourseList(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/course/getall`);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/course/get/${id}`);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.patch<Course>(`${this.apiUrl}/course/update/${id}`, course);
  }

  deleteCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(`${this.apiUrl}/course/delete/${id}`);
  }

  // OpeningDay
  createOpeningDay(openingDay: OpeningDay): Observable<OpeningDay> {
    return this.http.post<OpeningDay>(`${this.apiUrl}/openingday/create`, openingDay);
  }

  getOpeningDayLIst(): Observable<OpeningDay[]> {
    return this.http.get<OpeningDay[]>(`${this.apiUrl}/openingday/getall`);
  }

  getOpeningDay(id: number): Observable<OpeningDay> {
    return this.http.get<OpeningDay>(`${this.apiUrl}/openingday/get/${id}`);
  }

  updateOpeningDay(id: number, openingDay: OpeningDay): Observable<OpeningDay> {
    return this.http.patch<OpeningDay>(`${this.apiUrl}/openingday/update/${id}`, openingDay);
  }

  deleteOpeningDay(id: number): Observable<OpeningDay> {
    return this.http.delete<OpeningDay>(`${this.apiUrl}/openingday/delete/${id}`);
  }

  // Reservation
  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/reservation/create`, reservation);
  }

  getReservationList(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservation/getall`);
  }

  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/reservation/get/${id}`);
  }

  updateReservation(id: number, reservation: Reservation): Observable<Reservation> {
    return this.http.patch<Reservation>(`${this.apiUrl}/reservation/update/${id}`, reservation);
  }

  deleteReservation(id: number): Observable<Reservation> {
    return this.http.delete<Reservation>(`${this.apiUrl}/reservation/delete/${id}`);
  }

  // Subscription
  createSubscription(subscription: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(`${this.apiUrl}/subscription/create`, subscription);
  }

  getSubscriptionList(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(`${this.apiUrl}/subscription/getall`);
  }

  getSubscription(id: number): Observable<Subscription> {
    return this.http.get<Subscription>(`${this.apiUrl}/subscription/get/${id}`);
  }

  updateSubscription(id: number, subscription: Subscription): Observable<Subscription> {
    return this.http.patch<Subscription>(`${this.apiUrl}/subscription/update/${id}`, subscription);
  }

  deleteSubscription(id: number): Observable<Subscription> {
    return this.http.delete<Subscription>(`${this.apiUrl}/subscription/delete/${id}`);
  }

  // User
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user/create`, user);
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user/getall`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/get/${id}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/user/update/${id}`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/user/delete/${id}`);
  }
}

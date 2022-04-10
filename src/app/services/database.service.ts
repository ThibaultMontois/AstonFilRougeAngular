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
export class DatabaseService<T> {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = this.getUrl();
  }

  getUrl(): string {
    if (this instanceof Address) return `${environment.apiUrl}/address`;
    if (this instanceof Club) return `${environment.apiUrl}/club`;
    if (this instanceof Course) return `${environment.apiUrl}/course`;
    if (this instanceof OpeningDay) return `${environment.apiUrl}/openingday`;
    if (this instanceof Reservation) return `${environment.apiUrl}/reservation`;
    if (this instanceof Subscription) return `${environment.apiUrl}/subscription`;
    if (this instanceof User) return `${environment.apiUrl}/user`;
    return '';
  }

  create(element: T): Observable<T> {
    return this.http.post<T>(`${this.url}/create`, element);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/getall`);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/get/${id}`);
  }

  update(id: number, element: T): Observable<T> {
    return this.http.patch<T>(`${this.url}/update/${id}`, element);
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${this.url}/delete/${id}`);
  }
}

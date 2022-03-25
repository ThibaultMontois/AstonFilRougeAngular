import { ReservationStatus } from "../enums/reservation-status.enum";
import { Course } from "./course.model";

export class Reservation {
    id: number;
    clientId: number;
    course: Course;
    status: ReservationStatus;
    requestDate: Date;

    constructor(id: number, clientId: number, course: Course, status?: ReservationStatus) {
        this.id = id;
        this.clientId = clientId;
        this.course = course;
        this.status = status ?? ReservationStatus.Requested;
        this.requestDate = new Date();
    }
}

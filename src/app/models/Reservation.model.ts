import { ReservationStatus } from "../enums/ReservationStatus.enum";
import { Course } from "./Course.model";

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
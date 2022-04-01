import { ReservationStatus } from "../enums/reservation-status.enum";

export class Reservation {
    id: number;
    clientId: number;
    courseId: number;
    status: ReservationStatus;
    requestDate: Date;

    constructor(id: number, clientId: number, courseId: number, status?: ReservationStatus) {
        this.id = id;
        this.clientId = clientId;
        this.courseId = courseId;
        this.status = status ?? ReservationStatus.Requested;
        this.requestDate = new Date();
    }
}

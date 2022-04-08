import { Time } from "@angular/common";
import { Day } from "../enums/day.enum";

export class OpeningDay {
    id: number;
    day: Day;
    openingHour: Time; // Date ??
    closureHour: Time; // Date ??

    constructor(id: number, day: Day, openingHour: Time, closureHour: Time) {
        this.id = id;
        this.day = day;
        this.openingHour = openingHour;
        this.closureHour = closureHour;
    }
}
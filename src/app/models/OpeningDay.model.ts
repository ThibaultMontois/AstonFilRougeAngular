import { Time } from "@angular/common";
import { Day } from "../enums/Day.enum";

export class OpeningDay {
    day: Day;
    openingHour: Time;
    closureHour: Time;

    constructor(day: Day, openingHour: Time, closureHour: Time) {
        this.day = day;
        this.openingHour = openingHour;
        this.closureHour = closureHour;
    }
}
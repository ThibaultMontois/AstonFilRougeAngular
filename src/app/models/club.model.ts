import { Address } from "./address.model";
import { Course } from "./course.model";
import { OpeningDay } from "./opening-day.model";

export class Club {
    id: number;
    name: string;
    address: Address;
    phoneNumber: string;
    capacity: number;
    inside: number;
    openingWeekDays: OpeningDay[];
    exceptionalClosures: Date[];
    planning: Course[];

    constructor(id: number, name: string, address: Address, phoneNumber: string, capacity: number, openingWeekDays: OpeningDay[], exceptionalClosures: Date[]) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.capacity = capacity;
        this.inside = 0;
        this.openingWeekDays = openingWeekDays;
        this.exceptionalClosures = exceptionalClosures;
        this.planning = [];
    }
}

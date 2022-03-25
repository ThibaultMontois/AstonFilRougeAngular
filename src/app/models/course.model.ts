import { Time } from "@angular/common";
import { CourseStatus } from "../enums/course-status.enum";
import { CourseType } from "../enums/course-type.enum";
import { Role } from "../enums/role.enum";
import { Address } from "./address.model";
import { User } from "./user.model";

export class Course {
    id: number;
    type: CourseType;
    date: Date;
    startHour: Time;
    endHour: Time;
    status: CourseStatus;
    clubId: number;
    address: Address | null;
    coachId: number;
    limit: number;
    title: string;
    description: string;

    constructor(id: number, type: CourseType, date: Date, startHour: Time, endHour: Time, status: CourseStatus, clubId?: number, address?: Address, coach?: User, limit?: number, title?: string, description?: string) {
        this.id = id;
        this.type = type;
        this.date = date;
        this.startHour = startHour;
        this.endHour = endHour;
        this.status = status;
        this.clubId = this.type !== CourseType.Home ? clubId ?? 0 : 0;
        this.address = this.type === CourseType.Home ? address ?? null : null;
        this.coachId = this.type !== CourseType.Access && coach && coach.role === Role.Coach ? coach.id : 0;
        this.limit = this.type === CourseType.Collective ? limit ?? 1 : 1;
        this.title = this.type === CourseType.Collective ? title ?? '' : '';
        this.description = this.type === CourseType.Collective ? description ?? '' : '';
    }
}

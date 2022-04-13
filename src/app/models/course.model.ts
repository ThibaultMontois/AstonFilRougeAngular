import { Time } from "@angular/common";
import { CourseStatus } from "../enums/course-status.enum";
import { CourseType } from "../enums/course-type.enum";

export class Course {
    id: number;
    type: CourseType;
    date: Date;
    startHour: Date;
    endHour: Date;
    status: CourseStatus;
    clubId: number;
    coachId: number;
    limit: number;
    title: string;
    description: string;

    constructor(id: number, type: CourseType, date: Date, startHour: Date, endHour: Date, status: CourseStatus, clubId: number, coachId: number, limit?: number, title?: string, description?: string) {
        this.id = id;
        this.type = type;
        this.date = date;
        this.startHour = startHour;
        this.endHour = endHour;
        this.status = status;
        this.clubId = clubId;
        this.coachId = coachId;
        this.limit = this.type === CourseType.Collective ? limit ?? 1 : 1;
        this.title = this.type === CourseType.Collective ? title ?? '' : '';
        this.description = this.type === CourseType.Collective ? description ?? '' : '';
    }
}

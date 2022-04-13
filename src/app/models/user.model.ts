import { Role } from "../enums/role.enum";
import { Club } from "./club.model";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    addressId: number | null;
    email: string;
    phoneNumber: string;
    birthDate: Date | null;
    role: Role;
    job: string | null;
    club: Club | null;
    description: string | null;
    creationDate: Date;
    updateDate: Date | null;
    avatar: string | null;

    constructor(id: number, firstName: string, lastName: string, password: string, email: string, phoneNumber: string, role: Role, addressId?: number, birthDate?: Date | null, club?: Club | null, job?: string | null, description?: string | null, avatar?: string | null) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.addressId = addressId ?? null;
        this.birthDate = birthDate ?? null;
        this.club = this.role === Role.Member || Role.Manager ? club ?? null : null;
        this.job = this.role === Role.Coach || Role.Manager ? job ?? null : null;
        this.description = this.role === Role.Coach ? description ?? null : null;
        this.avatar = avatar ?? '/assets/img/avatars/default_avatar.jpg';
        this.creationDate = new Date();
        this.updateDate = null;
    }
}

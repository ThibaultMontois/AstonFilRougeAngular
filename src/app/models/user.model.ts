import { Role } from "../enums/role.enum";
import { Address } from "./address.model";
import { Club } from "./club.model";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    // password
    address: Address | null;
    email: string;
    phoneNumber: string;
    birthDate: Date | null;
    role: Role;
    job: string | null;
    club: Club | null; // not null ??
    description: string | null;
    creationDate: Date;
    updateDate: Date | null;

    constructor(id: number, firstName: string, lastName: string, email: string, phoneNumber: string, address?: Address, birthDate?: Date | null, role?: Role, club?: Club | null, job?: string | null, description?: string | null) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address ?? null;
        this.birthDate = birthDate ?? null;
        this.role = role ?? Role.Guest;
        this.club = this.role === Role.Member || Role.Manager ? club ?? null : null;
        this.job = this.role === Role.Coach || Role.Manager ? job ?? null : null;
        this.description = this.role === Role.Coach ? description ?? null : null;
        this.creationDate = new Date();
        this.updateDate = null;
    }
}

import { Role } from "../enums/Role.enum";
import { Address } from "./Address.model";
import { Club } from "./Club.model";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    address: Address | null;
    email: string;
    phoneNumber: number;
    birthDate: Date | null;
    role: Role;
    job: string;
    club: Club | null;
    description: string;
    creationDate: Date;
    updateDate: Date | null;

    constructor(id?: number, firstName?: string, lastName?: string, address?: Address, email?: string, phoneNumber?: number, birthDate?: Date, role?: Role, club?: Club, job?: string, description?: string) {
        this.id = id ?? 0;
        this.firstName = firstName ?? '';
        this.lastName = lastName ?? '';
        this.address = address ?? null;
        this.email = email ?? '';
        this.phoneNumber = phoneNumber ?? 0;
        this.birthDate = birthDate ?? null;
        this.role = role ?? Role.Guest;
        this.club = this.role === Role.Member || Role.Manager ? club ?? null : null;
        this.job = this.role === Role.Coach || Role.Manager ? job ?? '' : '';
        this.description = this.role === Role.Coach ? description ?? '' : '';
        this.creationDate = new Date();
        this.updateDate = null;
    }
}
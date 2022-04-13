import { Role } from "../enums/role.enum";

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
    clubId: number | null;
    description: string | null;
    avatarUrl: string | null;
    creationDate: Date;
    updateDate: Date | null;

    constructor(id: number, firstName: string, lastName: string, password: string, email: string, phoneNumber: string, role: Role, addressId?: number, birthDate?: Date | null, clubId?: number | null, job?: string | null, description?: string | null, avatarUrl?: string | null, creationDate?: Date, updateDate?: Date | null) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.addressId = addressId ?? null;
        this.birthDate = birthDate ?? null;
        this.clubId = clubId ?? null;
        this.job = this.role === Role.Coach || Role.Manager ? job ?? null : null;
        this.description = this.role === Role.Coach ? description ?? null : null;
        this.avatarUrl = avatarUrl ?? '/assets/img/avatars/default_avatar.jpg';
        this.creationDate = new Date();
        this.updateDate = null;
    }
}

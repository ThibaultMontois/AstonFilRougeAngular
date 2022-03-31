import { Role } from "../enums/role.enum";

export class JWT {
    token: string = '';

    getPayload(): AuthUser | null {
        try {
            return JSON.parse(atob(this.token.split('.')[1]));
        } catch (error) {
            return null;
        }
    }
}

export class AuthUser {
    email: string | null;
    role: Role;
    exp: Date | null;

    constructor(email?: string | null, role?: Role, exp?: Date | null) {
        this.email = email ?? null;
        this.role = role ?? Role.Guest;
        this.exp = exp ?? null;
    }
}
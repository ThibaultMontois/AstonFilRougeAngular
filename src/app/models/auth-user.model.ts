import { Role } from "../enums/role.enum";

export class JWT {
    token: string = '';
    expiresAt: Date;

    constructor(token: string, expiresAt: Date) {
        this.token = token;
        this.expiresAt = expiresAt;
    }

    getPayload() {
        try {
            return JSON.parse(atob(this.token.split('.')[1]));
        } catch (error) {
            return null;
        }
    }

    getAuthUser() {
        const email: string = this.getPayload()['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
        const role: Role = +this.getPayload()['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] as Role;
        return new AuthUser(email, role);
    }
}
export class Payload {
    emailaddress!: string;
    role!: string;
    nbf!: number;
    exp!: number;
    iss!: string;
    aud!: string;
}

export class AuthUser {
    email: string | null;
    role: Role | null;

    constructor(email?: string | null, role?: Role | null) {
        this.email = email ?? null;
        this.role = role ?? null;
    }
}
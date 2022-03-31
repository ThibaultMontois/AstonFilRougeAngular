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
    email: string = '';
    role: Role = Role.Guest;
    exp: number = 0;
}
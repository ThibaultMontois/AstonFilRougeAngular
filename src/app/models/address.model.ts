export class Address {
    id: number;
    num: number | null;
    street: string;
    complement: string | null;
    zipCode: string;
    city: string;

    constructor(id: number, street: string, zipCode: string, city: string, num: number | null, complement?: string | null,) {
        this.id = id;
        this.num = num ?? null;
        this.street = street;
        this.complement = complement ?? null;
        this.zipCode = zipCode;
        this.city = city;
    }
}

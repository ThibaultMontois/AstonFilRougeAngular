export class Address {
    id: number;
    number: number | null;
    street: string;
    complement: string | null;
    zipCode: number;
    city: string;

    constructor(id: number, street: string, zipCode: number, city: string, number: number | null, complement?: string | null,) {
        this.id = id;
        this.number = number ?? null;
        this.street = street;
        this.complement = complement ?? null;
        this.zipCode = zipCode;
        this.city = city;
    }
}

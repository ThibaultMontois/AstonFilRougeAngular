export class Address {
    id: number;
    number: number;
    street: string;
    complement: string;
    zipCode: number;
    city: string;

    constructor(id: number, number: number, street: string, zipCode: number, city: string, complement?: string,) {
        this.id = id;
        this.number = number;
        this.street = street;
        this.complement = complement ?? '';
        this.zipCode = zipCode;
        this.city = city;
    }
}

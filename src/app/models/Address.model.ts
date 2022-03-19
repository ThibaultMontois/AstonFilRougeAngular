import * as internal from "stream";

export class Address {
    id: number;
    address: string;
    complement: string;
    zipCode: number;
    city: string;

    constructor(id: number, address: string, zipCode: number, city: string, complement?: string,) {
        this.id = id;
        this.address = address;
        this.complement = complement ?? '';
        this.zipCode = zipCode;
        this.city = city;
    }
}
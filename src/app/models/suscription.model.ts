import { BillingPeriod } from "../enums/billing-period.enum";

export class Suscription {
    id: number;
    clientId: number;
    clubId: number;
    // To do : SuscriptionType (enum)
    // To do : SuscriptionOptions (enum)
    price: number;
    billingPeriod: BillingPeriod;
    startDate: Date;
    endCommitmentDate: Date;
    endDate: Date | null;

    constructor(id: number, clientId: number, clubId: number, price: number, billingPeriod: BillingPeriod) {
        this.id = id;
        this.clientId = clientId;
        this.clubId = clubId;
        this.price = price;
        this.billingPeriod = billingPeriod;
        this.startDate = new Date();
        this.endCommitmentDate = new Date();
        this.endCommitmentDate.setFullYear(this.startDate.getFullYear() + 1);
        this.endDate = null;
    }
}

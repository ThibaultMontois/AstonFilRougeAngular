import { BillingPeriod } from "../enums/billing-period.enum";

export class Subscription {
    id: number;
    clientId: number;
    clubId: number;
    // To do : SubscriptionType (enum)
    // To do : SubscriptionOptions (enum)
    price: number;
    billingPeriod: BillingPeriod;
    startDate: Date;
    endCommitmentDate: Date | null;
    endDate: Date | null;

    constructor(id: number, clientId: number, clubId: number, price: number, billingPeriod: BillingPeriod, endCommitmentDate?: Date | null) {
        this.id = id;
        this.clientId = clientId;
        this.clubId = clubId;
        this.price = price;
        this.billingPeriod = billingPeriod;
        this.startDate = new Date();
        this.endCommitmentDate = endCommitmentDate ?? null;
        this.endDate = null;
    }
}

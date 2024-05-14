import { PaymentMode } from "../Enums/paymentMode";

export class DonationRequest
{
    name?: string
    PaymentMode!: PaymentMode
    bank?: string
    amount!: number
}

export class DonationResponse 
{
    name?: string
    PaymentMode!: PaymentMode
    bank?: string
    amount!: number
    transactionId?: number
    reciept!: number
    orderId!: number
    date!: number
}


export class MemberDonationResponse
{
    name?: string
    PaymentMode!: PaymentMode
    bank?: string
    amount!: number
    donationId!: string
    appealId!: string
    beneficiaryId!: string
    donationDate!: string

}
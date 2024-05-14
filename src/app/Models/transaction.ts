import { UserRole } from "../Enums/userRole";

export class TransactionResponse
{
    orderId?:string;
    transactionId?:string;
    donorId?:string;
    appealId?:string;
    receipt?:string;
    paidAmount?:number;
    donorName?:string;
    donorContactNo?:string;
    donorEmail?:string;
    userRole?:UserRole;
    beneficiaryId?:string;
    caseNo?:string;
    description?:string;
    transactionDate?:string;
    isPublic?:boolean;
}

export class MyTransactionResponse
{

    orderId?:string;
    transactionId?:string;
    donorId?:string;
    appealId?:string;
    receipt?:string;
    paidAmount?:number;
    beneficiaryId?:string;
    caseNo?:string;
    description?:string;
    transactionDate?:string;
    isPublic?:boolean;

}


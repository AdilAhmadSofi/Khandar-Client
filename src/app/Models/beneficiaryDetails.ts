import { AnnualIncome } from "../Enums/annualIncome";
import { Disability } from "../Enums/disability";
import { FamilyStatus } from "../Enums/familyStatus";
import { Gender } from "../Enums/gender";
import { MaritalStatus } from "../Enums/maritailStatus";
import { ParentStatus } from "../Enums/parentStatus";
import { Religion } from "../Enums/religion";
import { Religious } from "../Enums/religious";
import { WorkingSector } from "../Enums/workingSector";

export class BeneficiaryDetailsResponse{
    id!:string;
    name!:string;
    username!:string;
    parentage!:string;
    email!:string;
    contactNo!:string;
    gender!:Gender;
    aadhaarNo!:string;
    caste!:string;
    dob!:Date;
    religion!:Religion;
    religious!:Religious;
    maritalStatus!:MaritalStatus;
    occupation!:string;
    workingSector!:WorkingSector;
    annualIncome!:AnnualIncome;
    disability!:Disability;
    familyStatus!:FamilyStatus;
    fatherStatus!:ParentStatus;
    motherStatus!:ParentStatus;
    brothers!:number;
    brothersMarried!:number;
    sisters?:number;
    description?:string;
    sistersMarried?:number;
    filePath! : string;
    createdOn! : string;
    addressLine! : string;
    landmark! : string;
    pinCode! : string;
    state! : string;
    qualification! : string;
}
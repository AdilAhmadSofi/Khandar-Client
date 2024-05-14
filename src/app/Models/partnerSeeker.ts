import { AnnualIncome } from "src/app/Enums/annualIncome";
import { BodyType } from "src/app/Enums/bodytype";
import { Complexion } from "src/app/Enums/complexion";
import { Disability } from "src/app/Enums/disability";
import { FamilyStatus } from "src/app/Enums/familyStatus";
import { Gender } from "src/app/Enums/gender";
import { Height } from "src/app/Enums/height";
import { MaritalStatus } from "src/app/Enums/maritailStatus";
import { NativeLanguage } from "src/app/Enums/nativeLanguage";
import { ParentStatus } from "src/app/Enums/parentStatus";
import { ProfilePictureVisibilty } from "src/app/Enums/profilePictureVisibility";
import { Religion } from "src/app/Enums/religion";
import { Religious } from "src/app/Enums/religious";
import { WorkingSector } from "src/app/Enums/workingSector";
import { VisibilityLevel } from "../Enums/visibilityLevel";

export class BasicProfileResponse
{
    id!:string;
    name!:string;
    userName!:string;
    contactNo!:string;
    email!:string;
    filePath!:string;
    addressLine?:string;
    qualification?:string;
    aadhaarNo?:string;
}

export class PartnerSeekerRequest {
    id!:string;
    name!:string;
    parentage!:string;
    email!:string;
    contactNo!:string;
    gender!:Gender;
    aadhaarNo!:string;
    caste!:string;
    dob?:string;
    religion!:Religion;
    religious!:Religious;
    nativeLanguage!:NativeLanguage;
    maritalStatus!:MaritalStatus;
    occupation!:string;
    workingSector!:WorkingSector;
    annualIncome!:AnnualIncome;
    disability!:Disability;
    height!:Height;
    bodyType!:BodyType;
    complexion!:Complexion;
    hasBeard?:boolean;
    doesHijab?:boolean;
    familyStatus!:FamilyStatus;
    fatherStatus!:ParentStatus;
    motherStatus!:ParentStatus;
    brothers!:number;
    brothersMarried!:number;
    sisters?:number;
    profilePictureVisibilty!:ProfilePictureVisibilty;
    description?:string;
    sistersMarried?:number;
    file!:string;
}


export class PartnerSeekerResponse {
    id!:string;
    name!:string;
    parentage!:string;
    email!:string;
    contactNo!:string;
    gender!:Gender;
    aadhaarNo!:string;
    caste!:string;
    dob?:string;
    religion!:Religion;
    religious!:Religious;
    nativeLanguage!:NativeLanguage;
    maritalStatus!:MaritalStatus;
    occupation!:string;
    workingSector!:WorkingSector;
    annualIncome!:AnnualIncome;
    disability!:Disability;
    height!:Height;
    bodyType!:BodyType;
    complexion!:Complexion;
    hasBeard?:boolean;
    doesHijab?:boolean;
    familyStatus!:FamilyStatus;
    fatherStatus!:ParentStatus;
    motherStatus!:ParentStatus;
    brothers!:number;
    brothersMarried!:number;
    sisters?:number;
    profilePictureVisibilty!:ProfilePictureVisibilty;
    description?:string;
    sistersMarried?:number;
    file!:string;
    filePath! : string;
    createdOn! : string;
}

export class PersonalInfoResponse
{
    id!:string;
    name!:string;
    userName!:string;
    parentage!:string;
    email!:string;
    contactNo!:string;
    gender!:Gender;
    aadhaarNo!:string;
    caste!:string;
    dOB!:string;
    age!:string;
    nativeLanguage!:NativeLanguage;
    maritalStatus!:MaritalStatus;
    occupation!:string;
    workingSector!:WorkingSector;
    annualIncome!:AnnualIncome;
    disability!:Disability;
    filePath! : string;
}

export class FamilyInfoResponse
{

    id!:string;
    familyStatus!:FamilyStatus;
    fatherStatus!:ParentStatus;
    motherStatus!:ParentStatus;
    brothers!:number;
    brothersMarried!:number;
    sisters?:number;
    sistersMarried?:number;
}


export class ProfessionalInfoResponse
    {
        id!:string;
        occupation!:string;
        workingSector!:WorkingSector;
        annualIncome!:AnnualIncome;
    }

    export class AppearanceInfoResponse
    {
        id!:string;
        disability!:Disability;
        height!:Height;
        bodyType!:BodyType;
        complexion!:Complexion;
    }

    export class ReligiousInfoResponse
    {
        id!:string;
        religion!:Religion;
        religious!:Religious;
        hasBeard?:boolean;
        doesHijab?:boolean;
    }

    export class PartnerSeekerVisibiltyRequest
    {
        id!:string;
       visibilityLevel!: VisibilityLevel
    }


export class PartnerSeekerPublicResponse
{
    id!: string;
    name!: string;
    caste!: string;
    dOB!: string;
    age!: number;
    occupation!: string;
    description!: string;
    maritalStatus!: MaritalStatus;
    nativeLanguage!: NativeLanguage;
    workingSector!: WorkingSector;
    religion!: Religion;
    gender!: Gender;
    city!: string;
    filePath!:string;

}

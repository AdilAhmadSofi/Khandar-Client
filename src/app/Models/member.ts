import { Gender } from "../Enums/gender";
import { MemberInvolvement } from "../Enums/memberInvolvement";
import { MemberType } from "../Enums/memberType";

export class MemberRequest
{
    name!:string;
    id!:string;
    parentage!:string;
    email!:string;
    contactNo!:string;
    gender!:Gender;
    aadhaarNo!:string;
    caste!:string;
    dOB!:string;
    memberInvolvement! :MemberInvolvement
    description! : string
    file!:string;
}


export class MemberResponse
{
    id!:string;
    name!:string;
    parentage!:string;
    email!:string;
    contactNo!:string;
    gender!:Gender;
    aadhaarNo!:string;
    caste!:string;
    dOB!:string;
    memberInvolvement! :MemberInvolvement
    description! : string
    file!:string;
    filePath!:string;
    teamId!:string;
    teamName!:string;
    memberType!:MemberType
}


export class MemberBasicDetailsResponse{
    id!:string;
    name!:string;
    filePath!:string;
}
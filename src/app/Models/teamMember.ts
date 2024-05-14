import { Gender } from "../Enums/gender";
import { MemberInvolvement } from "../Enums/memberInvolvement";
import { MemberType } from "../Enums/memberType";

export class TeamMemberRequest
{
    memberId!: string
    memberType!:MemberType
    memberInvolvement!:MemberInvolvement
    teamId!: string
}
export class TeamMemberResponse {
    id!: string
    memberId!: string
    memberType!:MemberType
    memberInvolvement!:MemberInvolvement
    teamId!: string
    createdOn!: string
}
export class TeamMemberInfoResponse
{
    id!: string;
    memberId!: string;
    memberType!:MemberType;
    memberInvolvement!:MemberInvolvement;
    teamId!: string;;
    createdOn!: string;
    teamName!: string;
    location!: string;
    name!: string;
    contactNo!: string;
    email!: string;
    gender!: Gender;
    filePath!:string;
}
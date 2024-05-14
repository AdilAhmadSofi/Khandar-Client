import { MemberInvolvement } from "../Enums/memberInvolvement";
import { MemberType } from "../Enums/memberType";

export class TeamRequest
    {
        name!: string
        description?: string;
        location!: string;
    }
    export class TeamResponse
    {
        id!: string;
        name!: string
        description?: string;
        location!: string;
        memberId!: string;
        memberType!:MemberType;
        memberInvolvement!:MemberInvolvement;
    }
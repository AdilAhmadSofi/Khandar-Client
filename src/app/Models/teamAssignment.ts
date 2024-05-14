import { DonationAppealStatus } from "../Enums/donationAppealStatus";
import { Gender } from "../Enums/gender";
import { TeamAssignStatus } from "../Enums/teamAssignmentStatus";

export class TeamAssignmentRequest
{
    appealId!: string;
    teamId!: string;
}

export class TeamAssignmentResponse {
    id!:string
    teamAssignStatus!:TeamAssignStatus
    createdOn!:string
    updatedOn!:string
    appealId!: string;
    teamId!: string;
}

export class TeamAssignedAppealResponse 
{
    id!:string
    teamAssignStatus!:TeamAssignStatus
    createdOn!:string
    updatedOn!:string
    appealId!: string;
    teamId!: string;
    beneficiaryId!: string;
    gender!:Gender
    beneficiaryName!: string;
    teamName!: string;
    description!: string;
    amount!: number;
    donationAppealStatus!:DonationAppealStatus
}
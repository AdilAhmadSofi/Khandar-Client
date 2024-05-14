import { ProposalStatus } from "../Enums/proposalStatus";
import { VisibilityLevel } from "../Enums/visibilityLevel";
import { PartnerSeekerPublicResponse } from "./partnerSeeker";

export class ProposalUpdateRequest
{
    id! : string;
    proposalStatus! :ProposalStatus
    allowChat! : boolean
}

export  class ProposalResponse
{
    id! : string;
    proposalStatus! :ProposalStatus
    visibilityLevel = VisibilityLevel
    allowChat! : boolean
}

export class ProposalInfoResponse extends PartnerSeekerPublicResponse
{
    proposalId!:string;
    recieverId!:string;
    senderId?:string;
    visibilityLevel!:VisibilityLevel;
    proposalStatus!:ProposalStatus;
    allowChat!:boolean;
    createdOn!:string;
}
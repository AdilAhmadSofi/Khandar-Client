import { DonationAppealStatus } from "../Enums/donationAppealStatus"
import { MemberType } from "../Enums/memberType"
import { Remarks } from "../Enums/remarks"

export class AppealVerificationRequest
{
    teamAssignmentId!: string
    feedback!: string
    remarks!: Remarks
}
export class AppealVerificationResponse 
    {
        id!: string
        teamAssignmentId!: string
        feedback!: string
        remarks!: Remarks
    }

    export class AppealMemberVerificationResponse
    {
        beneficiaryId!: string
        verificationId!: string
        remarks!: Remarks
        feedback!: string
        memberId!: string
        memberName!: string
        memberContactNo!: string
        appealDate! : string
        teamAssignmentId!: string
        memberType! : MemberType
        verificationDate! : string
        donationAppealStatus! : DonationAppealStatus
    }
    export class ApproveAppealLeaderRequest
    {
        teamAssignmentId!: string
        feedback!: string
        DonationAppealStatus!: DonationAppealStatus
    }
    

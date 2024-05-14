import { AgeGroup } from "../Enums/ageGroup";
import { AnnualIncome } from "../Enums/annualIncome";
import { FamilyStatus } from "../Enums/familyStatus";
import { NativeLanguage } from "../Enums/nativeLanguage";
import { Religion } from "../Enums/religion";
import { Religious } from "../Enums/religious";
import { WorkingSector } from "../Enums/workingSector";

export class PartnerPreferenceRequest
{
    caste!: string
    ageGroup!:AgeGroup
    religion!:Religion
    religious!: Religious
    hasBeard?:Boolean
    doesHijab?:Boolean
    nativeLanguage!: NativeLanguage
    workingSector!: WorkingSector
    annualIncome!: AnnualIncome
    familyStatus!:FamilyStatus
}


export class PartnerPreferenceResponse
{
    id!: string
    caste!: string
    ageGroup!:AgeGroup
    religion!:Religion
    religious!: Religious
    hasBeard?:Boolean
    doesHijab?:Boolean
    nativeLanguage!: NativeLanguage
    workingSector!: WorkingSector
    annualIncome!: AnnualIncome
    familyStatus!:FamilyStatus
}
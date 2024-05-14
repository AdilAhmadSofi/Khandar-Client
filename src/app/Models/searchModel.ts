import { AnnualIncome } from "../Enums/annualIncome";
import { BodyType } from "../Enums/bodytype";
import { Complexion } from "../Enums/complexion";
import { Disability } from "../Enums/disability";
import { Gender } from "../Enums/gender";
import { Height } from "../Enums/height";
import { MaritalStatus } from "../Enums/maritailStatus";
import { NativeLanguage } from "../Enums/nativeLanguage";
import { Religion } from "../Enums/religion";
import { Religious } from "../Enums/religious";
import { WorkingSector } from "../Enums/workingSector";

export class SearchModel
{
    nameTerm! : string
    religion!: Religion
    maritalStatus!: MaritalStatus
    workingSector!: WorkingSector
}
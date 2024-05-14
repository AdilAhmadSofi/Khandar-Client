import { Pipe, PipeTransform } from '@angular/core';
import { Disability } from '../Enums/disability';

@Pipe({
  name: 'disability'
})
export class DisabilityPipe implements PipeTransform {

  transform(value: Disability, ...args: unknown[]): unknown {
    return value === Disability.None
    ? "None"
    : value === Disability.MentallyChallengedFromBirth
    ? "Mentally Challenged From Birth"
    : value === Disability.PhysicalAbnormalityAffectingOnlyLooks
    ? "Physical Abnormality Affecting Only Looks"
    : value === Disability.PhysicalAbnormalityAffectingBodilyFunction
    ? "Physical Abnormality Affecting Bodily Function"
    : value === Disability.PhysicallyChallengedDueToAccindent
    ? "Physically Challenged Due To Accindent"
    : value === Disability.DefectsOnVitalOrgans
    ? "Defects On Vital Organs"
    : value === Disability.PhysicallyChallengedFromBirth
    ? "Physically Challenged From Birth"
    : "None"
      }

}

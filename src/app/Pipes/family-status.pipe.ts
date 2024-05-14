import { Pipe, PipeTransform } from '@angular/core';
import { FamilyStatus } from '../Enums/familyStatus';

@Pipe({
  name: 'familyStatus'
})
export class FamilyStatusPipe implements PipeTransform {

  transform(value: FamilyStatus, ...args: unknown[]): unknown {
    return value === FamilyStatus.MiddleClass
    ? "Middle Class" 
    : value === FamilyStatus.Affluent
    ? "Affluent"
    : value === FamilyStatus.UpperMiddleClass
    ? "Upper Middle Class"
    : value === FamilyStatus.LowerMiddleClass
    ? "Lower Middle Class"
    : value === FamilyStatus.PoorFamily
    ? "Poor Family"
    : value === FamilyStatus.PreferNotToSay
    ? "Prefer Not To Say"
    : "Unknown"
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { MemberInvolvement } from '../Enums/memberInvolvement';

@Pipe({
  name: 'memberInvolvement'
})
export class MemberInvolvementPipe implements PipeTransform {

  transform(value: MemberInvolvement, ...args: unknown[]): unknown {
    return value === MemberInvolvement.VerySerious
    ? "Very Serious"
    : value === MemberInvolvement.Serious
    ? "Serious"
    : value === MemberInvolvement.Moderate
    ? "Moderate"    
    : value === MemberInvolvement.NonSerious
    ? "Non Serious"
    : "Unknown"
  }

}

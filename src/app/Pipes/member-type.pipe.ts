import { Pipe, PipeTransform } from '@angular/core';
import { MemberType } from '../Enums/memberType';

@Pipe({
  name: 'memberType'
})
export class MemberTypePipe implements PipeTransform {

  transform(value: MemberType, ...args: unknown[]): unknown {
    return value == MemberType.Leader
    ? "Leader"
    : value == MemberType.CoLeader
    ? "CoLeader"
    : value == MemberType.Member
    ? "Member"
    : "Unknown"
  }

}


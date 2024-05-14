import { Pipe, PipeTransform } from '@angular/core';
import { ParentStatus } from '../Enums/parentStatus';

@Pipe({
  name: 'parentStatus'
})
export class ParentStatusPipe implements PipeTransform {

  transform(value: ParentStatus, ...args: unknown[]): unknown {
    return value === ParentStatus.Employed
    ? "Employed"
    : value === ParentStatus.Bussiness
    ? "Bussiness"
    : value === ParentStatus.Retired
    ? "Retired"
    : value === ParentStatus.NotEmployed
    ? "Not Employed"
    : value === ParentStatus.PassedAway
    ? "Passed Away"    
    : value === ParentStatus.HomeMaker
    ? "HomeMaker"
    : "Unknown"
  }

}

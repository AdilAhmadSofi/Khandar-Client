import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatus } from '../Enums/maritailStatus';

@Pipe({
  name: 'maritalStatus'
})
export class MaritalStatusPipe implements PipeTransform {

  transform(value: MaritalStatus, ...args: unknown[]): unknown {
    return value === MaritalStatus.Divorced
    ? 'Divorced'
    : value === MaritalStatus.Married
    ? 'Married'
    : value === MaritalStatus.UnMarried
    ? 'UnMarried'
    : value === MaritalStatus.Widowed
    ? 'Widowed'
    : 'Unknown';
  }

}

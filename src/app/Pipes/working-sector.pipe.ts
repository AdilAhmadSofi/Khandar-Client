import { Pipe, PipeTransform } from '@angular/core';
import { WorkingSector } from '../Enums/workingSector';

@Pipe({
  name: 'workingSector'
})
export class WorkingSectorPipe implements PipeTransform {

  transform(value: WorkingSector, ...args: unknown[]): unknown {
    return value === WorkingSector.Bussiness
    ? 'Bussiness'
    : value === WorkingSector.Government
    ? 'Government'
    : value === WorkingSector.NotWorking
    ? 'Not Working'
    : value === WorkingSector.Other
    ? 'Other'
    : value === WorkingSector.Private
    ? 'Private'
    : value === WorkingSector.SelfEmployed
    ? 'Self Employed'
    : 'Unknown';
  }

}

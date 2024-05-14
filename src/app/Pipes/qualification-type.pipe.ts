import { Pipe, PipeTransform } from '@angular/core';
import { QualificationType } from '../Enums/qualificationType';

@Pipe({
  name: 'qualificationType'
})
export class QualificationTypePipe implements PipeTransform {

  transform(value: QualificationType, ...args: unknown[]): unknown {
    return value === QualificationType.Bachelor
    ? 'Bachelor'
    : value === QualificationType.Certificate
    ? 'Certificate'
    : value === QualificationType.Diploma
    ? 'Diploma'
    : value === QualificationType.Doctorate
    ? 'Doctorate'
    : value === QualificationType.HighSchool
    ? 'High School'
    : value === QualificationType.Masters
    ? 'Masters'
    : 'Unknown';
  }

}

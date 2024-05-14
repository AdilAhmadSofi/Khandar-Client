import { Pipe, PipeTransform } from '@angular/core';
import { Religious } from '../Enums/religious';

@Pipe({
  name: 'religious'
})
export class ReligiousPipe implements PipeTransform {

  transform(value: Religious, ...args: unknown[]): unknown {
    return value === Religious.VeryReligious
    ? "Very Religious"
    : value === Religious.ModerateReligious
    ? "Moderate Religious"
    : value === Religious.NotReligious
    ? "Not Religious"
    : value === Religious.NotVeryReligious
    ? "Not Very Religious"
    : "Unknown"
  }

}

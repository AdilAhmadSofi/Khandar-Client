import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../Enums/gender';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: Gender, ...args: unknown[]): string {
    return value === Gender.Male
      ? 'Male'
      : 'Female';
  }

}

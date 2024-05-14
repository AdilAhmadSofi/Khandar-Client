import { Pipe, PipeTransform } from '@angular/core';
import { Religion } from '../Enums/religion';

@Pipe({
  name: 'religion'
})
export class ReligionPipe implements PipeTransform {

  transform(value: Religion, ...args: unknown[]): unknown {
    return value === Religion.MuslimShia
    ? 'Muslim Shia'
    : value === Religion.MuslimSunni
    ? 'Muslim Sunni'
    : value === Religion.Christian
    ? 'Christian'
    : value === Religion.Hinduism
    ? 'Hindu'
    : value === Religion.Sikhism
    ? 'Sikhism'
    : 'Unknown';
  }

}

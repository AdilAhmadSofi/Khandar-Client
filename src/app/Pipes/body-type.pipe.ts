import { Pipe, PipeTransform } from '@angular/core';
import { BodyType } from '../Enums/bodytype';

@Pipe({
  name: 'bodyType'
})
export class BodyTypePipe implements PipeTransform {

  transform(value: BodyType, ...args: unknown[]): unknown {
    return value === BodyType.Slim
    ? 'Slim'
    : value === BodyType.Average
    ? 'Average'
    : value === BodyType.Athletic
    ? 'Athletic'
    : value === BodyType.Fat
    ? 'Fat'
    : value === BodyType.Other
    ? 'Other'
    :"Unknown"
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { NativeLanguage } from '../Enums/nativeLanguage';

@Pipe({
  name: 'nativelanguage'
})
export class NativelanguagePipe implements PipeTransform {

  transform(value: NativeLanguage, ...args: unknown[]): unknown {
    return value === NativeLanguage.English
    ? 'English'
    : value === NativeLanguage.Urdu
    ? 'Urdu'
    : value === NativeLanguage.Kashmiri
    ? 'Kashmiri'
    : 'Unknown';
  }

}

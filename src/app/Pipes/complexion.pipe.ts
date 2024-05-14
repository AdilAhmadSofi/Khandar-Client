import { Pipe, PipeTransform } from '@angular/core';
import { Complexion } from '../Enums/complexion';

@Pipe({
  name: 'complexion'
})
export class ComplexionPipe implements PipeTransform {

  transform(value: Complexion, ...args: unknown[]): unknown {
    return value === Complexion.VeryFair
    ? "Very Fair"
    : value === Complexion.Fair
    ? "Fair"
    : value === Complexion.Dark
    ? "Dark"
    : value === Complexion.Brown
    ? "Brown"    
    : value === Complexion.Wheatish
    ? "Wheatish"
    : value === Complexion.Others
    ? "Other"
    : "Unknown"
  }

}

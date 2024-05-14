import { Pipe, PipeTransform } from '@angular/core';
import { AnnualIncome } from '../Enums/annualIncome';

@Pipe({
  name: 'annualIncome'
})
export class AnnualIncomePipe implements PipeTransform {

  transform(value: AnnualIncome, ...args: unknown[]): unknown {
    return value === AnnualIncome.BelowLac
    ?"Below 1 Lac"
    : value === AnnualIncome.LacTo2Lac
    ? '1 Lac to 2 Lac'
    : value === AnnualIncome.From2LacTo5Lac
    ? '2 Lac to 5 Lac'
    : value === AnnualIncome.From5LacTo10Lac
    ? '5 Lac to 10 Lac'
    : value === AnnualIncome.Above10lac
    ? 'Above 10 lac'
    : value === AnnualIncome.PreferNotToSay
    ? 'Prefer Not To Say'
    :"Unknown"
    ;
  }

}

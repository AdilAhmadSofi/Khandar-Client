import { Pipe, PipeTransform } from '@angular/core';
import { Remarks } from '../Enums/remarks';

@Pipe({
  name: 'remarks'
})
export class RemarksPipe implements PipeTransform {

  transform(value: Remarks, ...args: unknown[]): unknown {
    return value === Remarks.Genuine
    ? "Genuine"
    : value === Remarks.Fraud
    ? "Fraud"
    : value === Remarks.Scam
     ? "Scam"
    : "Unknown"  }

}

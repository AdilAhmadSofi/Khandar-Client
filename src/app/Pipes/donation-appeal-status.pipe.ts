import { Pipe, PipeTransform } from '@angular/core';
import { DonationAppealStatus } from '../Enums/donationAppealStatus';

@Pipe({
  name: 'donationAppealStatus'
})
export class DonationAppealStatusPipe implements PipeTransform {

  transform(value: DonationAppealStatus, ...args: unknown[]): unknown {
    return value === DonationAppealStatus.Pending
    ?"Pending"
    : value === DonationAppealStatus.Processing
    ? 'Processing'
    : value === DonationAppealStatus.Approved
    ? 'Approved'
    : value === DonationAppealStatus.Rejected
    ? 'Rejected'
    : value === DonationAppealStatus.Cancelled
    ? 'Cancelled'
    : value === DonationAppealStatus.Waiting
    ? 'Waiting'
    : value === DonationAppealStatus.Completed
    ? 'Completed'
    : value === DonationAppealStatus.Verified
    ? 'Verified'
    :"Unknown"
    ;
  }
}

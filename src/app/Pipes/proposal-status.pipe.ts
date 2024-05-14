import { Pipe, PipeTransform } from '@angular/core';
import { ProposalStatus } from '../Enums/proposalStatus';

@Pipe({
  name: 'proposalStatus'
})
export class ProposalStatusPipe implements PipeTransform {

  transform(value: ProposalStatus, ...args: unknown[]): unknown {
    return value === ProposalStatus.Accepted
    ? "Accepted"
    : (value === ProposalStatus.Pending)
    ? "Pending"
    : (value === ProposalStatus.Rejected)
    ? "Rejected"
    : (value === ProposalStatus.Cancelled)
    ? "Cancelled"
    : "Unknown"
  }

}

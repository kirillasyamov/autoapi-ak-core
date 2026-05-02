import { DomainException } from './domain.exception';

export class AccountDisabledException extends DomainException {
  constructor() { super('Account disabled'); }
}

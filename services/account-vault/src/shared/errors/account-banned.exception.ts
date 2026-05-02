import { DomainException } from './domain.exception';

export class AccountBannedException extends DomainException {
  constructor() { super('Account banned'); }
}

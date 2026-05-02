import { DomainException } from './domain.exception';

export class EmailAlreadyExistsException extends DomainException {
  constructor() { super('Email already exists'); }
}

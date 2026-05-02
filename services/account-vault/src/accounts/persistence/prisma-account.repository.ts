import { Injectable } from '@nestjs/common';
import { AccountRepository } from '../domain/account.repository';

@Injectable()
export class PrismaAccountRepository implements AccountRepository {
  save() { return {}; }
  findById() { return {}; }
}

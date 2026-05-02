import { Injectable } from '@nestjs/common';
import { AuthFactorRepository } from '../domain/auth-factor.repository';

@Injectable()
export class PrismaAuthFactorRepository implements AuthFactorRepository {
  save() { return {}; }
  findByAccountId() { return {}; }
}

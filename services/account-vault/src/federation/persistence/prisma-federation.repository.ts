import { Injectable } from '@nestjs/common';
import { FederationRepository } from '../domain/federation.repository';

@Injectable()
export class PrismaFederationRepository implements FederationRepository {
  save() { return {}; }
  findByAccountId() { return {}; }
}

import { Injectable } from '@nestjs/common';
import { CredentialRepository } from '../domain/credential.repository';

@Injectable()
export class PrismaCredentialRepository implements CredentialRepository {
  save() { return {}; }
  findByAccountId() { return {}; }
}

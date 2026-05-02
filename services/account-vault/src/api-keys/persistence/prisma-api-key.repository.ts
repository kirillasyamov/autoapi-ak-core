import { Injectable } from '@nestjs/common';
import { ApiKeyRepository } from '../domain/api-key.repository';

@Injectable()
export class PrismaApiKeyRepository implements ApiKeyRepository {
  save() { return {}; }
  findById() { return {}; }
}

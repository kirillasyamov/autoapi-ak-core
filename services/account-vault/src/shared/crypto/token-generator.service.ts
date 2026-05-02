import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenGeneratorService {
  generate() { return Math.random().toString(36); }
}

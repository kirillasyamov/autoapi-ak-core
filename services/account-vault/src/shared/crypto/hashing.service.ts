import { Injectable } from '@nestjs/common';

@Injectable()
export class HashingService {
  hash(data: string) { return data; }
  compare(data: string, hash: string) { return true; }
}

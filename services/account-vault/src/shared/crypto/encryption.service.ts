import { Injectable } from '@nestjs/common';

@Injectable()
export class EncryptionService {
  encrypt(data: string) { return data; }
  decrypt(data: string) { return data; }
}

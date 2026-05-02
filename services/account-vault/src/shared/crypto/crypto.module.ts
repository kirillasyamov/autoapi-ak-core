import { Module } from '@nestjs/common';
import { EncryptionService } from './encryption.service';
import { HashingService } from './hashing.service';
import { TokenGeneratorService } from './token-generator.service';

@Module({
  providers: [EncryptionService, HashingService, TokenGeneratorService],
  exports: [EncryptionService, HashingService, TokenGeneratorService],
})
export class CryptoModule {}

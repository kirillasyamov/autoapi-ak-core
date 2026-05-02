import { Module } from '@nestjs/common';
import { ApiKeysGrpcController } from './api-keys.grpc.controller';
import { ApiKeysService } from './api-keys.service';

@Module({
  controllers: [ApiKeysGrpcController],
  providers: [ApiKeysService],
})
export class ApiKeysModule {}

import { Module } from '@nestjs/common';
import { CredentialsGrpcController } from './credentials.grpc.controller';
import { CredentialsService } from './credentials.service';

@Module({
  controllers: [CredentialsGrpcController],
  providers: [CredentialsService],
})
export class CredentialsModule {}

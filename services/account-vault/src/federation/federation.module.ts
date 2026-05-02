import { Module } from '@nestjs/common';
import { FederationGrpcController } from './federation.grpc.controller';
import { FederationService } from './federation.service';

@Module({
  controllers: [FederationGrpcController],
  providers: [FederationService],
})
export class FederationModule {}

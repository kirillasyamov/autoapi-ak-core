import { Module } from '@nestjs/common';
import { AuthFactorGrpcController } from './auth-factor.grpc.controller';
import { AuthFactorService } from './auth-factor.service';

@Module({
  controllers: [AuthFactorGrpcController],
  providers: [AuthFactorService],
})
export class AuthFactorModule {}

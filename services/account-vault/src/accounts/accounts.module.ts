import { Module } from '@nestjs/common';
import { AccountsGrpcController } from './accounts.grpc.controller';
import { AccountsService } from './accounts.service';

@Module({
  controllers: [AccountsGrpcController],
  providers: [AccountsService],
})
export class AccountsModule {}

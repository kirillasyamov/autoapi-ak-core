import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AccountsGrpcController {
  @GrpcMethod('AccountsService', 'CreateAccount')
  createAccount() { return {}; }
}

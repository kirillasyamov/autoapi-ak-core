import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AuthFactorGrpcController {
  @GrpcMethod('AuthFactorService', 'EnableTotp')
  enableTotp() { return {}; }
}

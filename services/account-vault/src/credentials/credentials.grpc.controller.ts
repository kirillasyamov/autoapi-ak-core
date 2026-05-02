import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class CredentialsGrpcController {
  @GrpcMethod('CredentialsService', 'VerifyPassword')
  verifyPassword() { return {}; }
}

import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class FederationGrpcController {
  @GrpcMethod('FederationService', 'LinkIdentity')
  linkIdentity() { return {}; }
}

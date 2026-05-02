import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class ApiKeysGrpcController {
  @GrpcMethod('ApiKeysService', 'CreateApiKey')
  createApiKey() { return {}; }
}

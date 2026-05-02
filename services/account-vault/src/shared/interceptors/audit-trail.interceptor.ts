import { Injectable, NestInterceptor } from '@nestjs/common';

@Injectable()
export class AuditTrailInterceptor implements NestInterceptor {
  intercept() { return; }
}

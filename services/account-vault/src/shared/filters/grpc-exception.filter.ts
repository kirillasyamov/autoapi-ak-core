import { ExceptionFilter } from '@nestjs/common';

export class GrpcExceptionFilter implements ExceptionFilter {
  catch(exception: any) { return exception; }
}

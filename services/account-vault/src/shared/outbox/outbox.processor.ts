import { Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('outbox')
export class OutboxProcessor {
  async handle(job: Job) { console.log(job); }
}

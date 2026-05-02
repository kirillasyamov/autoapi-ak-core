import { Module } from '@nestjs/common';
import { OutboxProcessor } from './outbox.processor';
import { OutboxEntity } from './outbox.entity';

@Module({
  providers: [OutboxProcessor],
})
export class OutboxModule {}

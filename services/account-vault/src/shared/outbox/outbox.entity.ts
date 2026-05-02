import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class OutboxEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column() event: string;
  @Column() payload: string;
}

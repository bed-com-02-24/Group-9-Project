 import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  payment_id: number;

  @Column()
  booking_id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  method: string;

  @Column({ default: 'pending' })
  status: string;

  @Column({ unique: true, nullable: true })
  transaction_reference: string;

  @CreateDateColumn()
  payment_date: Date;
}
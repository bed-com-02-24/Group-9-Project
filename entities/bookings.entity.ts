import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'BOOKINGS' })
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'number' })
  studentId: number;

  @Column({ type: 'number' })
  roomId: number;

  @Column({ type: 'date' })
  bookingDate: string;

  @Column({ type: 'varchar2', length: 20, default: 'PENDING' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  roomId: string;

  @Column()
  rating: number; // 1 to 5

  @Column({ nullable: true })
  comment: string;
s
  @ManyToOne(() => User, { eager: true })
  student: User;

  @CreateDateColumn()
  createdAt: Date;
}
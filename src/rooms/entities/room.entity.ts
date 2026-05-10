import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// This tells TypeORM to create a "rooms" table in the database
@Entity('rooms')
export class Room {

  // Auto-generated ID for each room (1, 2, 3 ...)
  @PrimaryGeneratedColumn()
  id: number;

  // The title of the room advert e.g. "Single Room near UNIMA Gate 2"
  @Column()
  title: string;

  // Where the room is located e.g. "Chinamwali, Zomba"
  @Column()
  location: string;

  // Monthly rent in Malawian Kwacha (MWK) e.g. 35000
  @Column()
  rent: number;

  // A longer description of the room
  @Column()
  description: string;

  // List of image filenames or URLs (optional)
  @Column('simple-array', { nullable: true })
  images: string[];

  // Whether the room is still available (true = available, false = taken)
  @Column({ default: true })
  availability: boolean;
}

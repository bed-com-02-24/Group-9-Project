import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
@Entity('distance')
export class distance{
    @PrimaryGeneratedColumn()
    room_id:number;
    @Column({length:255})
    rental_fee: number;
    @Column({length:255})
    features: string;
    
}
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
@Entity('Compare')
export class Compare{
    @PrimaryGeneratedColumn()
    room_id!:number;
    @Column('real')
    rental_fee!: number;
    @Column({length:255})
    features!: string;
    @Column('real')
    distance!: number;
    
}
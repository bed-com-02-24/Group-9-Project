import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
@Entity('compare')
export class compare{
    @PrimaryGeneratedColumn()
    room_id:number;
    @Column({
    type:'decimal',precision:10,scale:2})
    rental_fee: number;
    @Column({length:255})
    features: string;
    @Column({
    type:'decimal',precision:10})
    distance: number;
    
}
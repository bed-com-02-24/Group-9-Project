import { Injectable } from '@nestjs/common';
import { Compare } from './entities/compare.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CompareService {
    constructor(
        @InjectRepository(Compare)
        private compareRepository: Repository<Compare>,
    ){}
    async findAll(): Promise<Compare[]> {
    return this.compareRepository.find();
}
   
       async compareRooms(room1?: number, room2?: number) {
    if (room1 == null || room2 == null) {
        throw new Error('Both room IDs must be provided');
    }
const [firstRoom, secondRoom] = await Promise.all([
    this.compareRepository.findOne({
        where: { room_id: room1 },
        //relations: ['features', 'distance'],
    }),
    this.compareRepository.findOne({
        where: { room_id: room2 },
       // relations: ['features', 'distance'],
    }),
]); 
    

    if (!firstRoom || !secondRoom) {
        throw new Error('One or both rooms not found');
    }

    return {
        room1: firstRoom,
        room2: secondRoom,
    };
} 

}


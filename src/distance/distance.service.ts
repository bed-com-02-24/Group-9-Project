import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare } from 'src/compare/entities/compare.entity';

@Injectable()
export class DistanceService {
  constructor(
    @InjectRepository(compare)
    private compareRepository: Repository<compare>,
  ) {}

  async getDistance(room_id: number) {
    const room = await this.compareRepository.findOne({
      where: { room_id },
    });

    if (!room) {
      return { message: 'Room not found' };
    }

    const { room_id: id, distance } = room;

    return {
      room_id: id,
      distance,
    };
  }
}
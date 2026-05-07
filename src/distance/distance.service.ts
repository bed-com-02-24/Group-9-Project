import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compare } from '../compare/entities/compare.entity';

@Injectable()
export class DistanceService {
  constructor(
    @InjectRepository(Compare)
    private compareRepository: Repository<Compare>,
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
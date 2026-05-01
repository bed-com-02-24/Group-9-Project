import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { User } from '../users/user.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
  ) {}

  async create(createReviewDto: CreateReviewDto, student: User): Promise<Review> {
    const review = this.reviewsRepository.create({
      ...createReviewDto,
      student,
    });
    return this.reviewsRepository.save(review);
  }

  async findByRoom(roomId: string): Promise<Review[]> {
    return this.reviewsRepository.find({ where: { roomId } });
  }
}
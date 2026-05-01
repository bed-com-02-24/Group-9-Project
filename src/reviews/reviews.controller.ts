import { Controller, Post, Get, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
//import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('api/v1/reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  //@UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createReviewDto: CreateReviewDto, @Request() req) {
    return this.reviewsService.create(createReviewDto, req.user);
  }

  @Get(':roomId')
  findByRoom(@Param('roomId') roomId: string) {
    return this.reviewsService.findByRoom(roomId);
  }
}
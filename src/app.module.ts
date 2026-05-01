import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { User } from './users/user.entity';
import { Review } from './reviews/review.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'accommodation.db',
      entities: [User, Review],
      synchronize: true,
    }),
    UsersModule,
    ReviewsModule,
  ],
})
export class AppModule {}
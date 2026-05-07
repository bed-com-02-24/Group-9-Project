import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { User } from './users/entities/user.entity';
import { Review } from './reviews/review.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ReviewsModule,
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'accommodation.db',
      entities: [User, Review],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
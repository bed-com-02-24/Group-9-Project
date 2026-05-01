import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
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
=======
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'oracle',
      connectString: 'localhost:1521/system_pdb',
      username: 'system_user',
      password: 'amelikano',
      serviceName: 'system_pdb',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
>>>>>>> 9078b7b054acb8f9f2a03e9e73fb83cf179f36f5
})
export class AppModule {}
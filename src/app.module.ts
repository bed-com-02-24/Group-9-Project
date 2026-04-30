import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { CompareModule } from './compare/compare.module';
import { DistanceModule } from './distance/distance.module';
import { NotificationModule } from './notification/notification.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { User } from './users/entities/user.entity';
import { Review } from './reviews/review.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
        ConfigModule.forRoot({isGlobal:true}),
        TypeOrmModule.forRoot({
                        type: 'better-sqlite3',
                        database: 'accommodation.db',
                        autoLoadEntities:true,
                        synchronize: true,
                        logging:true
        }),
        CompareModule,
        DistanceModule,
        NotificationModule,
        PaymentModule,
        UsersModule,
        ReviewsModule,
        AuthModule,
      ],
=======
import { RoomsModule } from './rooms/rooms.module';
import { Room } from './rooms/entities/room.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'better-sqlite3',
        database: config.get<string>('DB_DATABASE', 'rooms.db'),
        entities: [Room],
        synchronize: config.get<string>('DB_SYNCHRONIZE') === 'true',
      }),
    }),
    RoomsModule,
  ],
>>>>>>> 8dfe44e (creted the endpoints for room, entities and dto)
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


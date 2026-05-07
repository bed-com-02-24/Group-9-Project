import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompareModule } from './compare/compare.module';
import { DistanceModule } from './distance/distance.module';
import { NotificationModule } from './notification/notification.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule , ConfigService} from '@nestjs/config';
import { compare } from './compare/entities/compare.entity';   


@Module({
  imports: [CompareModule, DistanceModule, NotificationModule, PaymentModule,
        ConfigModule.forRoot({isGlobal:true}),
        TypeOrmModule.forRootAsync({
          imports:[ConfigModule],
          inject:[ConfigService],
          useFactory:(config: ConfigService)=>({
                        type: 'mysql',
                        host: config.get('DB_HOST'),
                        port: Number(config.get('DB_PORT')),
                        username: config.get('DB_USERNAME'),
                        password:  config.get('DB_PASSWORD'),
                        database:config.get('DB_SERVICE_NAME'),
                        autoLoadEntities:true,
                        synchronize: config.get('DB_SYNCHRONIZE')==='true',
                        entities: [compare],
                        logging:true
          }),
      
        }),
        CompareModule,
        DistanceModule,
        NotificationModule,
        PaymentModule,
      ],
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
})

export class AppModule {} 

export class AppModule {}

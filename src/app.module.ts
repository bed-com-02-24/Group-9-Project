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

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 

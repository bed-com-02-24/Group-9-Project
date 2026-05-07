import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistanceService } from './distance.service';
import { DistanceController } from './distance.controller';
import { compare } from 'src/compare/entities/compare.entity';

@Module({
  imports: [TypeOrmModule.forFeature([compare])],
  controllers: [DistanceController],
  providers: [DistanceService],
})
export class DistanceModule {}
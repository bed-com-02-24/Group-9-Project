import { Module } from '@nestjs/common';
import { CompareService } from './compare.service';
import { CompareController } from './compare.controller';
import { Compare } from './entities/compare.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Compare])],
  providers: [CompareService],
  controllers: [CompareController]
})
export class CompareModule {}

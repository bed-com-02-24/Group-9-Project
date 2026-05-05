import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { CompareService } from './compare.service';

@Controller('api/v1/compare')
export class CompareController {
  constructor(private readonly compareService: CompareService) {}

 
  @Get()
  findAll() {
    return this.compareService.findAll();
  }


  @Get('compare')
  compare(
    @Query('room1', ParseIntPipe) room1: number,
    @Query('room2', ParseIntPipe) room2: number,
  ) {
    return this.compareService.compareRooms(room1, room2);
  }
}
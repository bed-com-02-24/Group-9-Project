import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DistanceService } from './distance.service';

@Controller('api/v1/distance')
export class DistanceController {
  constructor(private readonly distanceService: DistanceService) {}

  @Get(':roomid')
  getDistance(
    @Param('roomid', ParseIntPipe) roomid: number,
  ) {
    return this.distanceService.getDistance(roomid);
  }
}
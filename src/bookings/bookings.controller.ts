import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query
} from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('api/v1/bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  createBooking(@Body() body: any) {
    return this.bookingsService.createBooking(body);
  }

  @Get()
  getBookings(@Query('studentid') studentid?: string, @Query('status') status?: string) {
    return this.bookingsService.getBookings();
  }

  @Get(':id')
  getBookingById(@Param('id') id: string) {
    return this.bookingsService.getBookingById(Number(id));
  }

  @Put(':id/cancel')
  cancelBooking(@Param('id') id: string, @Body() body: any) {
    return this.bookingsService.cancelBooking(Number(id));
  }
}


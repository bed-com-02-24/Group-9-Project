import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/bookings.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepo: Repository<Booking>,
  ) {}

  createBooking(data: any): Promise<any> {
    const booking = this.bookingRepo.create(data);
    return this.bookingRepo.save(booking);
  }

  getBookings(): Promise<any> {
    return this.bookingRepo.find();
  }

  getBookingById(id: number): Promise<any> {
    return this.bookingRepo.findOne({ where: { id } });
  }

  cancelBooking(id: number): Promise<any> {
    return this.bookingRepo.update(id, { status: 'CANCELLED' });
  }
}
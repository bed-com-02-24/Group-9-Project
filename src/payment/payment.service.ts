import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from '../compare/entities/payment.entity';
@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  async createPayment(data: any) {
    const payment = this.paymentRepository.create(data);
    return await this.paymentRepository.save(payment);
  }

  async getPaymentById(id: number) {
    const payment = await this.paymentRepository.findOne({
      where: { payment_id: id },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    return payment;
  }
}
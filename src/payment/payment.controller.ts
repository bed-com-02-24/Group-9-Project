import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentsService: PaymentService) {}

  @Post()
  createPayment(@Body() body: any) {
    return this.paymentsService.createPayment(body);
  }

  @Get(':id')
  getPayment(@Param('id') id: number) {
    return this.paymentsService.getPaymentById(Number(id));
  }
}
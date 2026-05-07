import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from 'src/compare/entities/notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private notificationRepository: Repository<Notification>,
  ) {}

  async getUserNotifications(user_id: number) {
    return this.notificationRepository.find({
      where: { user_id },
    });
  }

  async sendNotification(user_id: number, message: string) {
    const notification = this.notificationRepository.create({
      user_id,
      message,
    });

    return this.notificationRepository.save(notification);
  }
}
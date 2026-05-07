import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('api/v1/notification')
export class NotificationController {
  constructor(
    private readonly notificationsService: NotificationService,
  ) {}

  @Get()
  getNotifications(
    @Query('userid') userid: number,
  ) {
    return this.notificationsService.getUserNotifications(userid);
  }

  @Post()
  sendNotification(
    @Body() body: { userid: number; message: string },
  ) {
    return this.notificationsService.sendNotification(
      body.userid,
      body.message,
    );
  }
}
<<<<<<< HEAD
import { Controller, Get, Put, Delete, Param, Body, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
//import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // from your teammate's auth module

//@UseGuards(JwtAuthGuard)
@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query('role') role?: string, @Query('page') page?: number) {
    return this.usersService.findAll(role, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
=======
import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {}
>>>>>>> 9078b7b054acb8f9f2a03e9e73fb83cf179f36f5

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
=======
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
>>>>>>> 9078b7b054acb8f9f2a03e9e73fb83cf179f36f5

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
<<<<<<< HEAD
  exports: [UsersService], // export so reviews can use it
})
export class UsersModule {}
=======
  exports: [UsersService],
})
export class UsersModule {}
>>>>>>> 9078b7b054acb8f9f2a03e9e73fb83cf179f36f5

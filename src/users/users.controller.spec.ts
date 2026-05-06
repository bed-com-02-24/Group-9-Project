<<<<<<< HEAD
  import { Test, TestingModule } from '@nestjs/testing';
=======
import { Test, TestingModule } from '@nestjs/testing';
>>>>>>> 9078b7b054acb8f9f2a03e9e73fb83cf179f36f5
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
<<<<<<< HEAD
import { UsersService } from './users.service';
=======
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
>>>>>>> 9078b7b054acb8f9f2a03e9e73fb83cf179f36f5

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
<<<<<<< HEAD
      providers: [UsersService],
=======
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            findOne: jest.fn(),
            find: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
>>>>>>> 9078b7b054acb8f9f2a03e9e73fb83cf179f36f5
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

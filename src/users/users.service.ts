
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

export type UserRole = 'student' | 'Landlord' | 'admin';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)

    private usersRepository: Repository<User>,
  ) {}

  async findAll(role?: string, page = 1): Promise<User[]> {
    const query = this.usersRepository.createQueryBuilder('user');
    if (role) query.where('user.role = :role', { role });
    query.skip((page - 1) * 10).take(10);
    return query.getMany();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.usersRepository.remove(user);
  }

  //Create User
  async create(data: Partial<User>): Promise<User> {
    const user = this.usersRepository.create(data);
    return this.usersRepository.save(user);
  }

  //find by email
  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  //find by ID
  async findById(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }
}


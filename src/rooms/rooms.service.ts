import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './entities/room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { QueryRoomDto } from './dto/query-room.dto';

// @Injectable means NestJS will manage this class and inject it where needed
@Injectable()
export class RoomsService {

  // Inject the Room repository so we can talk to the database
  constructor(
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
  ) {}

  // CREATE — save a new room to the database
  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    // create() builds the room object from the DTO
    const room = this.roomsRepository.create(createRoomDto);
    // save() actually writes it to the database
    return await this.roomsRepository.save(room);
  }

  // READ ALL — get all rooms, with optional filters
  async findAll(query: QueryRoomDto): Promise<Room[]> {
    const { location, minPrice, maxPrice } = query;

    // Start building the query
    const qb = this.roomsRepository.createQueryBuilder('room');

    // If location was provided, filter by it (case-insensitive)
    if (location) {
      qb.andWhere('LOWER(room.location) LIKE :location', {
        location: `%${location.toLowerCase()}%`,
      });
    }

    // If minPrice was provided, only return rooms with rent >= minPrice
    if (minPrice !== undefined) {
      qb.andWhere('room.rent >= :minPrice', { minPrice });
    }

    // If maxPrice was provided, only return rooms with rent <= maxPrice
    if (maxPrice !== undefined) {
      qb.andWhere('room.rent <= :maxPrice', { maxPrice });
    }

    // Run the query and return the results
    return await qb.getMany();
  }

  // READ ONE — get a single room by its ID
  async findOne(id: number): Promise<Room> {
    const room = await this.roomsRepository.findOneBy({ id });

    // If no room was found, throw a 404 error
    if (!room) {
      throw new NotFoundException(`Room with ID ${id} not found`);
    }

    return room;
  }

  // UPDATE — change some fields on an existing room
  async update(id: number, updateRoomDto: UpdateRoomDto): Promise<Room> {
    // First check the room exists (throws 404 if not)
    const room = await this.findOne(id);

    // Merge the new values into the existing room object
    Object.assign(room, updateRoomDto);

    // Save the updated room back to the database
    return await this.roomsRepository.save(room);
  }

  // DELETE — remove a room from the database
  async remove(id: number): Promise<{ message: string }> {
    // First check the room exists (throws 404 if not)
    await this.findOne(id);

    // Delete the room by ID
    await this.roomsRepository.delete(id);

    return { message: `Room with ID ${id} has been deleted successfully` };
  }
}

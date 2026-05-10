import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { QueryRoomDto } from './dto/query-room.dto';

// @Controller sets the base URL for all routes in this file
// All routes here will start with /api/v1/rooms
@Controller('api/v1/rooms')
export class RoomsController {

  // Inject the RoomsService so we can use its methods
  constructor(private roomsService: RoomsService) {}

  // POST /api/v1/rooms — Add a new room advert
  // @Body() takes the JSON from the request body and maps it to CreateRoomDto
  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  // GET /api/v1/rooms — Get all rooms
  // @Query() reads optional query params like ?location=Zomba&minPrice=5000
  @Get()
  findAll(@Query() query: QueryRoomDto) {
    return this.roomsService.findAll(query);
  }

  // GET /api/v1/rooms/:id — Get one room by ID
  // @Param('id') reads the :id from the URL
  // ParseIntPipe converts the string "1" to the number 1
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.roomsService.findOne(id);
  }

  // PUT /api/v1/rooms/:id — Update a room by ID
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(id, updateRoomDto);
  }

  // DELETE /api/v1/rooms/:id — Delete a room by ID
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.roomsService.remove(id);
  }
}

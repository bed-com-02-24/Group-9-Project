import { IsString, IsNotEmpty, IsNumber, IsPositive, IsArray, IsOptional } from 'class-validator';

// This DTO defines what data is needed to create a room advert
export class CreateRoomDto {

  // Title of the room advert e.g. "Single Room near UNIMA Gate 2"
  @IsString()
  @IsNotEmpty()
  title: string;

  // Where the room is located e.g. "Chinamwali, Zomba"
  @IsString()
  @IsNotEmpty()
  location: string;

  // Monthly rent in Malawian Kwacha (MWK) e.g. 35000
  @IsNumber()
  @IsPositive()
  rent: number;

  // Description of the room e.g. "Self-contained room with water and electricity"
  @IsString()
  @IsNotEmpty()
  description: string;

  // Optional list of image filenames or URLs e.g. ["room_front.jpg", "room_inside.jpg"]
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}

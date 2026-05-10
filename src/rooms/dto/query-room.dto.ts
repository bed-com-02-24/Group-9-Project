import { IsOptional, IsString, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

// This DTO defines the query parameters for filtering rooms
// All fields are optional — the user can filter by none, one, or all of them
export class QueryRoomDto {

  // Filter rooms by location e.g. ?location=Chinamwali
  @IsOptional()
  @IsString()
  location?: string;

  // Filter rooms with rent >= minPrice e.g. ?minPrice=20000
  @IsOptional()
  @Type(() => Number) // converts the string from the URL into a number
  @IsNumber()
  @Min(0)
  minPrice?: number;

  // Filter rooms with rent <= maxPrice e.g. ?maxPrice=60000
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  maxPrice?: number;
}

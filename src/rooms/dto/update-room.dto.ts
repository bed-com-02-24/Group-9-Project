import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

// This DTO defines what fields can be updated on a room
// All fields are optional — you only send what you want to change
export class UpdateRoomDto {

  // Optionally update the rent in MWK e.g. 40000
  @IsOptional()
  @IsNumber()
  @IsPositive()
  rent?: number;

  // Optionally update the description e.g. "Now includes a borehole and 24hr security"
  @IsOptional()
  @IsString()
  description?: string;

  // Optionally mark the room as available or taken (true = available, false = taken)
  @IsOptional()
  @IsBoolean()
  availability?: boolean;
}

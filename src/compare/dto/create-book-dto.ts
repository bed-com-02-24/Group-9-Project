import { IsString,isNumber,IsOptional,IsNotEmpty, isString, IsNumber } from "class-validator";

export class createBookDto{
    @IsString()
    @IsNotEmpty()
    title:string;
    
    @IsString()
    @IsNotEmpty()
    author:string;
    
     @IsNumber()
     year:number;

      @IsString()
    @IsOptional()
    genre?:string;
    
    
}
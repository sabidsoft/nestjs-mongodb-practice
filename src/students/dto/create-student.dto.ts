/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty({message: "Name is required"})
    name!: string;

    @Type(() => Number)
    @IsNumber()
    age!: number;

    @IsOptional()
    @IsEmail()
    email?: string
} 
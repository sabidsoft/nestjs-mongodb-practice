/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: StudentsService) { }

    @Post()
    async addStudent(@Body() data: CreateStudentDto) {
        return this.studentService.createStudent(data);
    }
}
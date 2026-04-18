/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentDocument } from './student.schema';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: StudentsService) { }

    @Get()
    async getAllStudents(): Promise<StudentDocument[]> {
        return this.studentService.getAllStudents();
    };

    @Get(':id')
    async getStudent(@Param('id') id: string) {
        return this.studentService.getStudent(id);
    };

    @Post()
    async addStudent(@Body() data: CreateStudentDto) {
        return this.studentService.createStudent(data);
    };

    @Patch(':id')
    async updatePatchStudent(
        @Param('id') id: string,
        @Body() data: UpdateStudentDto
    ) {
        return this.studentService.updatePatchStudent(id, data);
    };

    @Put(':id')
    async updatePutStudent(
        @Param('id') id: string,
        @Body() data: CreateStudentDto
    ) {
        return this.studentService.updatePutStudent(id, data);
    };

    @Delete(':id')
    async deleteStudent(@Param('id') id: string) {
        return this.studentService.deleteStudent(id)
    };
}
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
    constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) { }

    async createStudent(data: CreateStudentDto): Promise<StudentDocument> {
        return this.studentModel.create(data);
    }
}

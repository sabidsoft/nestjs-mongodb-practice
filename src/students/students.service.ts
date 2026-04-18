/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model, UpdateResult } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
    constructor(
        @InjectModel(Student.name)
        private studentModel: Model<StudentDocument>
    ) { }

    async getAllStudents(): Promise<StudentDocument[]> {
        return this.studentModel.find().exec();
    };

    async getStudent(id: string): Promise<StudentDocument | null> {
        return this.studentModel.findById(id).exec();
    };

    async createStudent(data: CreateStudentDto): Promise<StudentDocument> {
        return this.studentModel.create(data);
    };

    async updatePatchStudent(id: string, data: UpdateStudentDto): Promise<StudentDocument | null> {
        return this.studentModel.findByIdAndUpdate(id, data, { new: true, runValidators: true }).exec();
    }

    async updatePutStudent(id: string, data: CreateStudentDto): Promise<UpdateResult> {
        return this.studentModel.replaceOne({ _id: id }, data, { runValidators: true });
    }
}

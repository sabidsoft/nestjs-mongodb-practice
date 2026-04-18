/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Student {
    @Prop({ required: true })
    name!: string;

    @Prop({ required: true })
    age!: number;

    @Prop()
    email?: string;
}

/**
 * Mongoose Schema generated from Student class
 * This is used to register the schema in NestJS module
 */
export const StudentSchema = SchemaFactory.createForClass(Student);

/**
 * Represents a MongoDB document for the Student schema.
 *
 * HydratedDocument<Student> means this type includes:
 * - Actual student data (name, age, email, etc.)
 * - MongoDB-specific fields like _id
 * - Mongoose document methods like save(), toObject(), updateOne(), deleteOne()
 *
 * In short: it is a fully functional database document, not just a plain TypeScript object.
 */
export type StudentDocument = HydratedDocument<Student>;
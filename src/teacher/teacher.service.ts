import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher, TeacherDocument } from './schemas/teacher.schema';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TeacherService {
  constructor(@InjectModel(Teacher.name) private readonly teacherModel: Model<TeacherDocument>) {}

  async createTeacher(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return await this.teacherModel.create({...createTeacherDto, id: uuid()});
  }

  async getTeachers(): Promise<Teacher[]> {
    return await this.teacherModel.find().exec();
  }

  async getTeacherById(id: string): Promise<Teacher> {
    const found = await this.teacherModel.findOne({ id });
    if (!found) {
      throw new NotFoundException(`Teacher with ID "${id}" not found`);
    }
    return found;
  }

  async deleteTeacher(id: string): Promise<boolean> {
    const result = await this.teacherModel.deleteOne({ id });
    if (!result.deletedCount) {
      throw new NotFoundException(`Teacher with ID "${id}" not found`);
    }
    return true;
  }
}

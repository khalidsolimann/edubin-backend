import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course, CourseDocument } from './schemas/course.schema';
import { v4 as uuid } from 'uuid';
import { TeacherService } from 'src/teacher/teacher.service';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private readonly courseModel: Model<CourseDocument>,
    private readonly teacherService: TeacherService
    ) {}

  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const { teacher } = createCourseDto;
    await this.teacherService.getTeacherById(teacher);
    return await this.courseModel.create({...createCourseDto, id: uuid()});
  }

  async getCourses(): Promise<Course[]> {
    return await this.courseModel.find().exec();
  }

  async getCourseById(id: string): Promise<Course> {
    const found = await this.courseModel.findOne({ id });
    if (!found) {
      throw new NotFoundException(`Course with ID "${id}" not found`);
    }
    return found;
  }

  async deleteCourse(id: string): Promise<boolean> {
    const result = await this.courseModel.deleteOne({ id });
    if (!result.deletedCount) {
      throw new NotFoundException(`Course with ID "${id}" not found`);
    }
    return true;
  }
}

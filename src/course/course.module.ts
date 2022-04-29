import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { Course, CourseSchema } from './schemas/course.schema';
import { TeacherModule } from 'src/teacher/teacher.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
    TeacherModule
  ],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}

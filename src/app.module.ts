import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';
import { ShopModule } from './shop/shop.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'localhost:27017'
    ),
    TeacherModule,
    CourseModule,
    ShopModule
  ]
})
export class AppModule {}

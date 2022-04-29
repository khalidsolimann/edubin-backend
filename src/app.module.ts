import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';
import { ShopModule } from './shop/shop.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://project:12345@cluster0.dacbn.mongodb.net/edubin?retryWrites=true&w=majority'
    ),
    TeacherModule,
    CourseModule,
    ShopModule
  ]
})
export class AppModule {}

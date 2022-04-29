import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher } from './schemas/teacher.schema';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async createTeacher(@Body() createTeacherDto: CreateTeacherDto) {
    return await this.teacherService.createTeacher(createTeacherDto);
  }

  @Get('/:id')
  async getTeacherById(@Param('id') id: string) {
    return await this.teacherService.getTeacherById(id);
  }

  @Get()
  async getTeachers() {
    return await this.teacherService.getTeachers();
  }

  @Delete('/:id')
  async deleteTeacher(@Param('id') id: string) {
    return await this.teacherService.deleteTeacher(id);
  }
}

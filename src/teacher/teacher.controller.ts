/* eslint-disable prettier/prettier */
import { Controller , Get, Param} from '@nestjs/common';
import { FindTeacherResponseDTO, TeacherResponseDTO } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';
@Controller('teachers')
export class TeacherController {

    constructor(private readonly teacherService: TeacherService) {}
    @Get()
    getTeachers(): FindTeacherResponseDTO[]{
        return this.teacherService.getTeachers();
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId') teacherId: string
    ): FindTeacherResponseDTO{
        return this.teacherService.getTeacherById(teacherId);
    }
    
}
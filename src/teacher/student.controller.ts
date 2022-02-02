/* eslint-disable prettier/prettier */
import { Controller , Get , Put , Param} from '@nestjs/common';
import { FindStudentResponseDTO, StudentResponseDTO } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';
@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    constructor(private readonly studentService: StudentService) {}
    @Get()
    getStudents(
        @Param('teacherId') teacherId: string
    ): FindStudentResponseDTO[]{
        return this.studentService.getStudentsByTeacherId(teacherId);
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('studentId') studentId: string,
        @Param('teacherId') teacherId: string,
    ): StudentResponseDTO{
        return this.studentService.updateStudentTeacher(teacherId,studentId);
    }
}

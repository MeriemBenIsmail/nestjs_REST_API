/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, ParseUUIDPipe } from '@nestjs/common';
import { FindStudentResponseDTO, CreateStudentDTO, StudentResponseDTO, UpdateStudentDTO } from './dto/student.dto';
import { StudentService } from 'src/student/student.service';
@Controller('students')
export class StudentController {

    constructor(private readonly studentService: StudentService) {}
    
    @Get()
    getStudent(): FindStudentResponseDTO[] {
        return this.studentService.getStudents()
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId',new ParseUUIDPipe()) studentId: string
    ): FindStudentResponseDTO {
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentDTO
    ): StudentResponseDTO {
        return this.studentService.createStudent(body);
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId',new ParseUUIDPipe()) studentId: string,
        @Body() body: UpdateStudentDTO
    ): StudentResponseDTO {
        return this.studentService.updateStudent(body,studentId);
    }

}
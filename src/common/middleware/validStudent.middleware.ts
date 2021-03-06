/* eslint-disable prettier/prettier */
import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction} from "express";
import { students } from 'src/db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction){
        console.log("middleware was called")
           const studentId = req.params.studentId;
           const studentExists = students.some(student => {
               student.id === studentId
           });
           if(!studentExists){
               throw new HttpException("student not found", 400);
           }
           next();
    }
}
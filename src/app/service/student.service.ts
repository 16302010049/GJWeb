import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../dataType/course';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  getStudnetList(lessson: Course): any {
    return this.http.get('http://localhost:5300/course_student?course_id=' + lessson.id);
  }

  getStudentInfo(student_id: string): any {
    return this.http.get('http://localhost:5300/student/' + student_id);
  }

  getAnswerRecord(lesson_id: string): any {
    return this.http.get('http://localhost:5300/answer_record?course_id=' + lesson_id);
  }

}

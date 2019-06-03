import {Injectable} from '@angular/core';
import {Course} from '../dataType/course';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Course_student} from '../dataType/course_student';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) {
  }

  addLesson(lesson): any {
    return this.http.post('http://localhost:8080/teacher/addLesson', lesson);
  }

  queryLesson(teacher_id: number): any {
    return this.http.get('http://localhost:8080/teacher/getAllLesson?teacher_id=' + teacher_id);
  }

  deleteLesson(lessonid: number) {
    this.http.get('http://localhost:8080/teacher/deleteCourse?course_id=' + lessonid).subscribe();
  }

  updateLesson(lesson: Course) {
    this.http.post('http://localhost:8080/teacher/updateLesson', lesson, httpOptions).subscribe();
  }

  addCourseStudent(Course_Student: Course_student) {
    this.http.post('http://localhost:5300/course_student', Course_Student, httpOptions).subscribe();
  }

  deleteCourseStudent(courseid: string) {
    this.http.delete('http://localhost:5300/course_student?course_id=' + courseid).subscribe();
  }
}

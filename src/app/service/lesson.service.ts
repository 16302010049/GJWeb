import {Injectable} from '@angular/core';
import {Course} from '../dataType/course';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) {
  }

  addLesson(lesson: Course) {
    this.http.post('http://localhost:5300/courses', lesson, httpOptions).subscribe();
  }

  queryLesson(teacher: string): any {
    return this.http.get('http://localhost:5300/courses?teacher=' + teacher);
    location.reload();
  }

  deleLesson(lessonid: string) {
    this.http.delete('http://localhost:5300/courses/' + lessonid).subscribe();
    location.reload();
  }

  updateLesson(lesson: Course) {
    this.http.put('http://localhost:5300/courses/' + lesson.id, lesson, httpOptions).subscribe();
  }
}

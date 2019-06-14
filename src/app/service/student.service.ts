import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Course} from '../dataType/course';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})


export class StudentService {

  constructor(private http: HttpClient) {
  }

  getStudnetList(lessson_id: number): any {
    return this.http.get('http://52.91.208.255:8080/teacher/studentList?course_id=' + lessson_id);
  }

  getAnswerRecord(obj): any {
    return this.http.post('http://52.91.208.255:8080/teacher/answerRecord', obj, httpOptions);
  }

}

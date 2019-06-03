import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {user} from '../dataType/user';
import {serialize} from '@angular/compiler/src/i18n/serializers/xml_helper';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  postUser(userp) {
    this.http.post('http://localhost:8080/teacher/register', userp).subscribe();
  }

  checkName(name: string): any {
    return this.http.get('http://localhost:8080/teacher/checkName?name=' + name);
  }
}

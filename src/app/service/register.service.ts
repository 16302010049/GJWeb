import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {user} from '../dataType/user';
import {serialize} from '@angular/compiler/src/i18n/serializers/xml_helper';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  postUser(userp: user) {
    this.http.post('http://localhost:5300/teacher', userp, httpOptions).subscribe();
  }
}

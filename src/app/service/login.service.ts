import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  getUser(): any {
    return this.http.get('http://52.91.208.255:5300/teacher');
  }

  checkUser(info) {
    return this.http.post('http://52.91.208.255:8080/teacher/login', info);
  }
}

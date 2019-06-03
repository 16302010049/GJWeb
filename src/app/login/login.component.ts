import {Component, OnInit} from '@angular/core';
import {user} from '../dataType/user';
import {LoginService} from '../service/login.service';
import {GlobalService} from '../service/global.service';

// tslint:disable-next-line:class-name

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string;
  password: string;
  users: user[];

  constructor(private loginSever: LoginService) {
  }

  ngOnInit() {
    if (localStorage.getItem('teacher')) {
      location.href = 'main';
    }
  }

  logincheck() {
    let info = new FormData();
    info.append('name', this.name);
    info.append('password', this.password);
    this.loginSever.checkUser(info).subscribe(
      data => {
        if (data != null) {
          localStorage.setItem('teacher', JSON.stringify(data));
          location.href = 'main';
        } else {
          alert('用户名或密码错误');
        }
      }
    );
  }

  register() {
    location.href = 'register';
  }
}

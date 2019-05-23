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
    this.loginSever.getUser().subscribe(users => this.users = users);
  }

  logincheck() {
    /*let has = false;
    this.loginSever.getUser().subscribe(users => this.users = users);
    console.log(JSON.stringify(this.users));
    for (const item of this.users) {
      if (item.name === this.name && item.password === this.password) {
        has = true;
        break;
      }
    }
    if (has) {
      localStorage.setItem('username', this.name);
      location.href = 'main';
    } else {
      alert('用户名或密码错误');
    }*/
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

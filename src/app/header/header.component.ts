import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../service/global.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public isLogin = false;
  username;
  teacher;

  constructor(private global: GlobalService) {
  }

  ngOnInit() {
    if (localStorage.getItem('teacher')) {
      this.teacher = JSON.parse(localStorage.getItem('teacher'));
      this.username = this.teacher.name;
      document.getElementById('header').style.backgroundImage = 'url(' + this.teacher.head + ')';
    } else {
      this.username = '未登录';
    }
  }

  logout() {
    localStorage.removeItem('teacher');
    location.href = 'login';
  }
}

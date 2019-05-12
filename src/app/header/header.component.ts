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

  constructor(private global: GlobalService) {
  }

  ngOnInit() {
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username');
    } else {
      this.username = '未登录';
    }
  }

  logout() {
    localStorage.removeItem('username');
    location.href = 'login';
  }
}

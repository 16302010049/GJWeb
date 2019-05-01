import {Component, OnInit} from '@angular/core';
import {Course} from '../dataType/course';
import {LessonService} from '../service/lesson.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  lessons: Course[];

  constructor(private service: LessonService) {
  }

  ngOnInit() {
    this.service.queryLesson(localStorage.getItem('username')).subscribe(users => this.lessons = users);
  }

  fresh() {
    this.service.queryLesson(localStorage.getItem('username')).subscribe(users => this.lessons = users);
  }

}

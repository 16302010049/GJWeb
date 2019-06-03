import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../dataType/course';
import {LessonService} from '../service/lesson.service';

@Component({
  selector: 'app-lessoncard',
  templateUrl: './lessoncard.component.html',
  styleUrls: ['./lessoncard.component.css']
})
export class LessoncardComponent implements OnInit {
  @Input() Lessons: Course[];
  teacher;

  constructor(private service: LessonService) {
  }

  ngOnInit() {
    this.teacher = JSON.parse(localStorage.getItem('teacher'));
    document.getElementById('header').style.backgroundImage = 'url(' + this.teacher.head + ')';
  }

  jump(lesson: Course) {
    localStorage.setItem('lesson', JSON.stringify(lesson));
    location.href = 'detail';
  }

  delete(lessonid: number) {
    this.service.deleteLesson(lessonid);
    location.reload();
  }
}

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

  constructor(private service: LessonService) {
  }

  ngOnInit() {
  }

  jump(lesson: Course) {
    localStorage.setItem('lesson', JSON.stringify(lesson));
    location.href = 'detail';
  }

  delete(lessonid: string) {
    this.service.deleteCourseStudent(lessonid)
    this.service.deleLesson(lessonid);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Course, QA} from '../dataType/course';
import {LessonService} from '../service/lesson.service';

let qa = {} as QA;

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() lesson: Course;
  @Input() SecIndex: number;
  @Input() ChaIndex: number;

  constructor(private service: LessonService) {
  }

  ngOnInit() {
    console.log('jfkaj');
  }

  addQuestion() {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    qa.question = '请输入问题';
    qa.answer = '请输入答案';
    this.lesson.chapters[this.ChaIndex].section[this.SecIndex].QA.push(qa);
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }

  tempSave() {
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }

  saveQA() {
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
    this.service.updateLesson(this.lesson);
    alert('已保存');
  }

  upQA(i: number) {
    if (i > 0) {
      qa = this.lesson.chapters[this.ChaIndex].section[this.SecIndex].QA[i - 1];
      // tslint:disable-next-line:max-line-length
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].QA[i - 1] = this.lesson.chapters[this.ChaIndex].section[this.SecIndex].QA[i];
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].QA[i] = qa;
      localStorage.setItem('lesson', JSON.stringify(this.lesson));
    }
  }

  downQA(i: number) {
    if (i < this.lesson.chapters[this.ChaIndex].section[this.SecIndex].QA.length - 1) {
      qa = this.lesson.chapters[this.ChaIndex].section[this.SecIndex].QA[i + 1];
      // tslint:disable-next-line:max-line-length
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].QA[i + 1] = this.lesson.chapters[this.ChaIndex].section[this.SecIndex].QA[i];
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].QA[i] = qa;
      localStorage.setItem('lesson', JSON.stringify(this.lesson));
    }
  }

  delQA(i: number) {
    this.lesson.chapters[this.ChaIndex].section[this.SecIndex].QA.splice(i, 1);
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }
}

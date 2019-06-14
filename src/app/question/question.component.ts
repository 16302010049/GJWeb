import {Component, Input, OnInit} from '@angular/core';
import {Course, question} from '../dataType/course';
import {LessonService} from '../service/lesson.service';

let qa = {} as question;

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
    qa.question = '';
    qa.answer = '';
    this.lesson.chapters[this.ChaIndex].section[this.SecIndex].question.push(qa);
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
      qa = this.lesson.chapters[this.ChaIndex].section[this.SecIndex].question[i - 1];
      // tslint:disable-next-line:max-line-length
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].question[i - 1] =
        this.lesson.chapters[this.ChaIndex].section[this.SecIndex].question[i];
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].question[i] = qa;
      localStorage.setItem('lesson', JSON.stringify(this.lesson));
    }
  }

  downQA(i: number) {
    if (i < this.lesson.chapters[this.ChaIndex].section[this.SecIndex].question.length - 1) {
      qa = this.lesson.chapters[this.ChaIndex].section[this.SecIndex].question[i + 1];
      // tslint:disable-next-line:max-line-length
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].question[i + 1] =
        this.lesson.chapters[this.ChaIndex].section[this.SecIndex].question[i];
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].question[i] = qa;
      localStorage.setItem('lesson', JSON.stringify(this.lesson));
    }
  }

  delQA(i: number) {
    this.lesson.chapters[this.ChaIndex].section[this.SecIndex].question.splice(i, 1);
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }
}

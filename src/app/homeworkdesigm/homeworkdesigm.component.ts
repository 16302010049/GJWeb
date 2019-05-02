import {Component, Input, OnInit} from '@angular/core';
import {Course, singleChoice} from '../dataType/course';
import {LessonService} from '../service/lesson.service';

let SC = {} as singleChoice;

@Component({
  selector: 'app-homeworkdesigm',
  templateUrl: './homeworkdesigm.component.html',
  styleUrls: ['./homeworkdesigm.component.css']
})
export class HomeworkdesigmComponent implements OnInit {
  @Input() lesson: Course;
  @Input() SecIndex: number;
  @Input() ChaIndex: number;

  constructor(private service: LessonService) {
  }

  ngOnInit() {
  }

  addSC() {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    SC.question = '请输入问题';
    SC.choiceA = '请输入选项A的内容';
    SC.choiceB = '请输入选项B的内容';
    SC.choiceC = '请输入选项C的内容';
    SC.choiceD = '请输入选项D的内容';
    SC.right_choice = 'A';
    this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice.push(SC);
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }

  upSC(i: number) {
    if (i > 0) {
      SC = this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i - 1];
      // tslint:disable-next-line:max-line-length
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i - 1] = this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i];
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i] = SC;
      localStorage.setItem('lesson', JSON.stringify(this.lesson));
    }
  }

  downSC(i: number) {
    if (i < this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice.length - 1) {
      SC = this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i + 1];
      // tslint:disable-next-line:max-line-length
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i + 1] = this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i];
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i] = SC;
      localStorage.setItem('lesson', JSON.stringify(this.lesson));
    }
  }

  delSC(i: number) {
    this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice.splice(i, 1);
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }

  tmepSave() {
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }

  save() {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    this.service.updateLesson(this.lesson);
  }

  makeRight(choice: string, i: number) {
    this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i].right_choice = choice;
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }
}

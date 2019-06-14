import {Component, Input, OnInit} from '@angular/core';
import {Course, singleChoice} from '../dataType/course';
import {LessonService} from '../service/lesson.service';
import {SectiondialogComponent} from '../sectiondialog/sectiondialog.component';
import {MatDialog} from '@angular/material';
import {HomeworkdialogComponent} from '../homeworkdialog/homeworkdialog.component';

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

  constructor(private service: LessonService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
  }

  addSC() {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    SC.question = '';
    SC.choiceA = '';
    SC.choiceB = '';
    SC.choiceC = '';
    SC.choiceD = '';
    SC.right_choice = 'A';
    this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice.push(SC);
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }

  upSC(i: number) {
    if (i > 0) {
      SC = this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i - 1];
      // tslint:disable-next-line:max-line-length
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i - 1] =
        this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i];
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i] = SC;
      localStorage.setItem('lesson', JSON.stringify(this.lesson));
    }
  }

  downSC(i: number) {
    if (i < this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice.length - 1) {
      SC = this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i + 1];
      // tslint:disable-next-line:max-line-length
      this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i + 1] =
        this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i];
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
    alert('已保存');
  }

  makeRight(choice: string, i: number) {
    this.lesson.chapters[this.ChaIndex].section[this.SecIndex].singleChoice[i].right_choice = choice;
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }

  openDialog(): void {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    const dialogRef = this.dialog.open(HomeworkdialogComponent, {
      width: '800px',
      data: {lesson: this.lesson, ChaIndex: this.ChaIndex, SecIndex: this.SecIndex}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

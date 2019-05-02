import {Component, Input, OnInit} from '@angular/core';
import {Chatpter, Course, section} from '../dataType/course';
import {MatDialog} from '@angular/material';
import {SectiondialogComponent} from '../sectiondialog/sectiondialog.component';
import {ChapterdialogComponent} from '../chapterdialog/chapterdialog.component';
import {LessonService} from '../service/lesson.service';

let se = {} as section;
let temp = {} as Chatpter;

@Component({
  selector: 'app-charpterlist',
  templateUrl: './charpterlist.component.html',
  styleUrls: ['./charpterlist.component.css']
})
export class CharpterlistComponent implements OnInit {
  @Input() modified;
  name: string;
  animal: string;
  lesson: Course;
  ChaIndex: number;
  SecIndex: number;

  constructor(private dialog: MatDialog, private service: LessonService) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
  }

  ngOnInit() {
  }

  openDialog(i: number): void {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    const dialogRef = this.dialog.open(SectiondialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(i);
      this.animal = result;
      console.log(this.animal);
      se.sectionname = this.animal;
      se.QA = [];
      se.singleChoice = [];
      this.lesson.chapters[i].section.push(se);
      localStorage.setItem('lesson', JSON.stringify(this.lesson));
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(ChapterdialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.lesson = JSON.parse(localStorage.getItem('lesson'));
      console.log('The dialog was closed');
      this.animal = result;
      console.log(this.animal);
      temp.chapter_name = this.animal;
      temp.section = [];
      this.lesson.chapters.push(temp);
      localStorage.setItem('lesson', JSON.stringify(this.lesson));
    });
  }

  upChapter(i: number) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    if (i > 0) {
      temp = this.lesson.chapters[i - 1];
      this.lesson.chapters[i - 1] = this.lesson.chapters[i];
      this.lesson.chapters[i] = temp;
    }
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }

  downChapter(i: number) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    if (i < this.lesson.chapters.length - 1) {
      temp = this.lesson.chapters[i + 1];
      this.lesson.chapters[i + 1] = this.lesson.chapters[i];
      this.lesson.chapters[i] = temp;
    }
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }

  delChapter(i: number) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    this.lesson.chapters.splice(i, 1);
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }

  upSetion(i: number, j: number) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    if (i > 0) {
      se = this.lesson.chapters[j].section[i - 1];
      this.lesson.chapters[j].section[i - 1] = this.lesson.chapters[j].section[i];
      this.lesson.chapters[j].section[i] = se;
    }
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }

  downSetion(i: number, j: number) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    if (i < this.lesson.chapters[j].section.length - 1) {
      se = this.lesson.chapters[j].section[i + 1];
      this.lesson.chapters[j].section[i + 1] = this.lesson.chapters[j].section[i];
      this.lesson.chapters[j].section[i] = se;
    }
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
  }

  save() {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    this.service.updateLesson(this.lesson);
  }

  changeIndex(i: number, j: number) {
    this.SecIndex = i;
    this.ChaIndex = j;
  }
}


import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Chatpter, Course, section} from '../dataType/course';
import {MatDialog} from '@angular/material';
import {SectiondialogComponent} from '../sectiondialog/sectiondialog.component';
import {ChapterdialogComponent} from '../chapterdialog/chapterdialog.component';
import {LessonService} from '../service/lesson.service';
import {Index} from '../dataType';
import {RenamedialogComponent} from '../renamedialog/renamedialog.component';

let se = {} as section;
let temp = {} as Chatpter;
let inx = {} as Index;

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

  @Output() childEvent = new EventEmitter<Index>();

  constructor(private dialog: MatDialog, private service: LessonService) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
  }

  ngOnInit() {
    this.ChaIndex = -1;
    this.SecIndex = -1;
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
    if (this.ChaIndex === i) {
      this.ChaIndex = i - 1;
      this.changeIndex(this.SecIndex, this.ChaIndex);
    }
  }

  downChapter(i: number) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    if (i < this.lesson.chapters.length - 1) {
      temp = this.lesson.chapters[i + 1];
      this.lesson.chapters[i + 1] = this.lesson.chapters[i];
      this.lesson.chapters[i] = temp;
    }
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
    if (this.ChaIndex === i) {
      this.ChaIndex = i + 1;
      this.changeIndex(this.SecIndex, this.ChaIndex);
    }
  }

  delChapter(i: number) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    this.lesson.chapters.splice(i, 1);
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
    if (this.ChaIndex === i) {
      this.ChaIndex = -1;
      this.SecIndex = -1;
      this.changeIndex(this.SecIndex, this.ChaIndex);
    }
  }

  upSetion(i: number, j: number) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    if (i > 0) {
      se = this.lesson.chapters[j].section[i - 1];
      this.lesson.chapters[j].section[i - 1] = this.lesson.chapters[j].section[i];
      this.lesson.chapters[j].section[i] = se;
    }
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
    if (this.ChaIndex === j && this.SecIndex === i) {
      this.SecIndex = i - 1;
      this.changeIndex(this.SecIndex, this.ChaIndex);
    }
  }

  downSetion(i: number, j: number) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    if (i < this.lesson.chapters[j].section.length - 1) {
      se = this.lesson.chapters[j].section[i + 1];
      this.lesson.chapters[j].section[i + 1] = this.lesson.chapters[j].section[i];
      this.lesson.chapters[j].section[i] = se;
    }
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
    if (this.ChaIndex === j && this.SecIndex === i) {
      this.SecIndex = i + 1;
      this.changeIndex(this.SecIndex, this.ChaIndex);
    }
  }

  delSetion(i: number, j: number) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    this.lesson.chapters[j].section.splice(i, 1);
    localStorage.setItem('lesson', JSON.stringify(this.lesson));
    if (this.ChaIndex === j && this.SecIndex === i) {
      this.ChaIndex = -1;
      this.SecIndex = -1;
      this.changeIndex(this.SecIndex, this.ChaIndex);
    }
  }

  save() {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    this.service.updateLesson(this.lesson);
  }

  changeIndex(i: number, j: number) {
    this.SecIndex = i;
    this.ChaIndex = j;
    localStorage.setItem('SecIndex', i.toString());
    localStorage.setItem('ChaIndex', j.toString());
    inx.ChaIndex = j;
    inx.SecIndex = i;
    this.childEvent.emit(inx);
  }

  renameCha(j: number) {
    const dialogRef = this.dialog.open(RenamedialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.lesson = JSON.parse(localStorage.getItem('lesson'));
      this.animal = result;
      this.lesson.chapters[j].chapter_name = this.animal;
      localStorage.setItem('lesson', JSON.stringify(this.lesson));
    });
  }

  renameSec(j: number, i: number) {
    const dialogRef = this.dialog.open(RenamedialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.lesson = JSON.parse(localStorage.getItem('lesson'));
      this.animal = result;
      this.lesson.chapters[j].section[i].sectionname = this.animal;
      localStorage.setItem('lesson', JSON.stringify(this.lesson));
    });
  }
}


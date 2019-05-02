import {Component, Inject, Input, OnInit} from '@angular/core';
import {Chatpter, Course, section} from '../dataType/course';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ChapterdialogComponent} from '../chapterdialog/chapterdialog.component';
import {LocationStrategy} from '@angular/common';
import {Index} from '../dataType';

// tslint:disable-next-line:prefer-const

@Component({
  selector: 'app-lessoncontain',
  templateUrl: './lessoncontain.component.html',
  styleUrls: ['./lessoncontain.component.css']
})

export class LessoncontainComponent implements OnInit {
  animal: string;
  name: string;
  ChaIndex: number;
  SecIndex: number;
  @Input() lesson: Course;

  constructor(public dialog: MatDialog) {
    this.ChaIndex = -1;
    this.SecIndex = -1;
  }

  ngOnInit() {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
  }

  getChildEvent(inx: Index) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    this.ChaIndex = inx.ChaIndex;
    this.SecIndex = inx.SecIndex;
  }

}

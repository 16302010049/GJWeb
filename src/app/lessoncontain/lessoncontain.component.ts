import {Component, Inject, Input, OnInit} from '@angular/core';
import {Chatpter, Course, section} from '../dataType/course';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ChapterdialogComponent} from '../chapterdialog/chapterdialog.component';
import {LocationStrategy} from '@angular/common';

// tslint:disable-next-line:prefer-const

@Component({
  selector: 'app-lessoncontain',
  templateUrl: './lessoncontain.component.html',
  styleUrls: ['./lessoncontain.component.css']
})

export class LessoncontainComponent implements OnInit {
  animal: string;
  name: string;
  @Input() lesson: Course;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    console.log(this.lesson);
  }
}

import {Component, Inject, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Answer_record} from '../dataType/answer_record';
import {StudentService} from '../service/student.service';
import {Course_student} from '../dataType/course_student';
import {Course, question} from '../dataType/course';
import {Student} from '../dataType/student';
import {MAT_DIALOG_DATA, MatDialogRef, MatTable} from '@angular/material';

export interface PeriodicElement {
  id: string;
  name: string;
  choice: string;
  right_choice: string;
}

export interface DialogData {
  lesson: Course;
  ChaIndex: number;
  SecIndex: number;
}

let temp = {} as PeriodicElement;
let AR = {} as Answer_record[];
let stude = {} as Student;
let course_stu = {} as Course_student;
let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-homeworkdialog',
  templateUrl: './homeworkdialog.component.html',
  styleUrls: ['./homeworkdialog.component.css']
})
export class HomeworkdialogComponent implements OnInit {
  @ViewChildren(MatTable) tables: QueryList<MatTable<any>>;
  displayedColumns: string[] = ['id', 'name', 'choice', 'right_choice'];
  dataSource: PeriodicElement[][] = [];
  courseanswer: Answer_record[];
  StudentInfoList: Student[] = [];
  Chaname: string;
  Secname: string;
  Q: string;

  constructor(private service: StudentService, public dialogRef: MatDialogRef<HomeworkdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
    var request = {
      course_id: this.data.lesson.id,
      chapter: this.data.lesson.chapters[this.data.ChaIndex].chapter_name,
      section: this.data.lesson.chapters[this.data.ChaIndex].section[this.data.SecIndex].sectionname
    };
    this.service.getAnswerRecord(request).subscribe(data => {
      var answers = data;
      for (let i = 0; i < this.data.lesson.chapters[this.data.ChaIndex].section[this.data.SecIndex].singleChoice.length; i++) {
        ELEMENT_DATA = [];
        var question = this.data.lesson.chapters[this.data.ChaIndex].section[this.data.SecIndex].singleChoice[i].question;
        for (const ar of answers) {
          if (ar.question === question) {
            let temp2 = {
              id: ar.id,
              name: ar.name,
              choice: ar.choice,
              right_choice: this.data.lesson.chapters[this.data.ChaIndex].section[this.data.SecIndex].singleChoice[i].right_choice
            };
            ELEMENT_DATA.push(temp2);
          }
        }
        this.dataSource.push(ELEMENT_DATA);
      }
      this.tables.forEach(table => table.renderRows());
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

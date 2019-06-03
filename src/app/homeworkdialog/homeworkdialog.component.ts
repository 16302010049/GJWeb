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
          console.log(ar.question);
          console.log(question);
          if (ar.question === question) {
            console.log('hah');
            let  temp2 = {
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
      console.log(this.dataSource);
      this.tables.forEach(table => table.renderRows());
    });
  }


  /*genAnswerTable(num: number, courseStudent: Course_student) {
    if (num < courseStudent.student_list.length) {
      this.service.getStudentInfo(courseStudent.student_list[num].student_id).subscribe(data => {
        stude = data;
        console.log(stude);
        this.StudentInfoList.push(stude);
        num++;
        this.genAnswerTable(num, courseStudent);
      });
    } else {
      for (let i = 0; i < this.data.lesson.chapters[this.data.ChaIndex].section[this.data.SecIndex].singleChoice.length; i++) {
        ELEMENT_DATA = [];
        this.Q = this.data.lesson.chapters[this.data.ChaIndex].section[this.data.SecIndex].singleChoice[i].question;
        console.log(this.courseanswer);
        console.log(this.Chaname);
        console.log(this.Secname);
        for (const ar of this.courseanswer) {
          if (ar.chapter === this.Chaname && ar.section === this.Secname && ar.question === this.Q) {
            for (const stu of this.StudentInfoList) {
              if (stu.id === ar.student_id) {
                let  temp2 = {
                  id: stu.id,
                  name: stu.name,
                  choice: ar.choice,
                  right_choice: this.data.lesson.chapters[this.data.ChaIndex].section[this.data.SecIndex].singleChoice[i].right_choice
                };
                ELEMENT_DATA.push(temp2);
                break;
              }
            }
          }
        }
        this.dataSource.push(ELEMENT_DATA);
      }
      console.log(this.dataSource);
      console.log(this.tables);
      this.tables.forEach(table => table.renderRows());
    }
  }
*/

  onNoClick(): void {
    this.dialogRef.close();
  }
}

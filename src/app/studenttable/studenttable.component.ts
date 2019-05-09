import {Component, OnInit, ViewChild} from '@angular/core';
import {Course_student} from '../dataType/course_student';
import {Course} from '../dataType/course';
import {StudentService} from '../service/student.service';
import {Student} from '../dataType/student';
import {MatTable} from '@angular/material';

export interface PeriodicElement {
  id: string;
  name: string;
  Student_number: string;
  progress: number;
}

//let temp = {} as PeriodicElement;
let ELEMENT_DATA: PeriodicElement[] = [];
let courseStudent = {} as Course_student;
let Stu = {} as Student;

@Component({
  selector: 'app-studenttable',
  templateUrl: './studenttable.component.html',
  styleUrls: ['./studenttable.component.css']
})
export class StudenttableComponent implements OnInit {
  @ViewChild(MatTable) private table: MatTable<any>;
  displayedColumns: string[] = ['id', 'name', 'Student_number', 'progress'];
  dataSource: PeriodicElement[] = [];
  lesson: Course;
  op: number;

  constructor(private service: StudentService) {
  }

  ngOnInit() {
    this.op = 0;
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    this.service.getStudnetList(this.lesson).subscribe(data => {
        courseStudent = data[0];
        this.getStudentList(courseStudent.student_list.length);
      }
    );
  }

  getStudentList(len: number) {
    if (this.op < len) {
      this.service.getStudentInfo(courseStudent.student_list[this.op].student_id).subscribe(datap => {
        Stu = datap;
        let temp = {
          id: Stu.id,
          name: Stu.name,
          Student_number : Stu.studentNumber,
          progress : courseStudent.student_list[this.op].progress
        };
        this.dataSource.push(temp);
        this.op++;
        this.getStudentList(len);
      });
    } else {
      this.table.renderRows();
    }
  }

}

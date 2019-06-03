import {Component, OnInit, ViewChild} from '@angular/core';
import {Course_student} from '../dataType/course_student';
import {Course} from '../dataType/course';
import {StudentService} from '../service/student.service';
import {Student} from '../dataType/student';
import {MatTable} from '@angular/material';

export interface PeriodicElement {
  student_id: string;
  name: string;
  studentnumber: string;
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
  displayedColumns: string[] = ['student_id', 'name', 'studentnumber', 'progress'];
  dataSource: PeriodicElement[] = [];
  lesson: Course;
  op: number;

  constructor(private service: StudentService) {
  }

  ngOnInit() {
    this.dataSource = [];
    this.op = 0;
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    this.service.getStudnetList(this.lesson.id).subscribe(data => {
        if (data.length !== 0) {
          this.dataSource = data;
        }
      }
    );
  }

}

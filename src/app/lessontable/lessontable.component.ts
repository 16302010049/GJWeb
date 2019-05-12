import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Course} from '../dataType/course';
import {UUID} from 'angular2-uuid';
import {LessonService} from '../service/lesson.service';
import {MatHorizontalStepper, MatStepper} from '@angular/material';
import {stu_info} from '../dataType/course_student';

let lesson = {} as Course;

@Component({
  selector: 'app-lessontable',
  templateUrl: './lessontable.component.html',
  styleUrls: ['./lessontable.component.css']
})
export class LessontableComponent implements OnInit {
  @ViewChild(MatHorizontalStepper) Stepper: MatHorizontalStepper;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private service: LessonService) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    console.log(this.Stepper);
  }

  add() {
    lesson.id = UUID.UUID();
    lesson.title = this.firstFormGroup.get('firstCtrl').value;
    lesson.subtitle = this.secondFormGroup.get('secondCtrl').value;
    lesson.background = this.thirdFormGroup.get('thirdCtrl').value;
    lesson.introduce = this.fourthFormGroup.get('fourthCtrl').value;
    lesson.teacher = localStorage.getItem('username');
    lesson.chapters = [];
    var course_student = {
      id: UUID.UUID(),
      course_id: lesson.id,
      student_list: []
    };
    this.service.addLesson(lesson);
    this.service.addCourseStudent(course_student)
    location.reload();
  }
}

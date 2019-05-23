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
    var formdata = new FormData();
    var teacher = JSON.parse(localStorage.getItem('teacher'));
    const objFile = document.getElementById('img') as HTMLInputElement;
    formdata.append('teacher_id', teacher.id);
    formdata.append('title', this.firstFormGroup.get('firstCtrl').value);
    formdata.append('subtitle', this.secondFormGroup.get('secondCtrl').value);
    formdata.append('background', objFile.files[0]);
    formdata.append('introduce', this.fourthFormGroup.get('fourthCtrl').value);
    formdata.append('content', '[]');
    this.service.addLesson(formdata);
  }
}

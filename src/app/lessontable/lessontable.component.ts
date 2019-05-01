import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Course} from '../dataType/course';
import {UUID} from 'angular2-uuid';
import {LessonService} from '../service/lesson.service';

let lesson = {} as Course;

@Component({
  selector: 'app-lessontable',
  templateUrl: './lessontable.component.html',
  styleUrls: ['./lessontable.component.css']
})
export class LessontableComponent implements OnInit {
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
  }

  add() {
    lesson.id = UUID.UUID();
    lesson.title = this.firstFormGroup.get('firstCtrl').value;
    lesson.subtitle = this.secondFormGroup.get('secondCtrl').value;
    lesson.background = this.thirdFormGroup.get('thirdCtrl').value;
    lesson.introduce = this.fourthFormGroup.get('fourthCtrl').value;
    lesson.teacher = localStorage.getItem('username');
    this.service.addLesson(lesson);
    location.reload();
  }
}

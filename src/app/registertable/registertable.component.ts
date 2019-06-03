import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {user} from '../dataType/user';
import {RegisterService} from '../service/register.service';
import {UUID} from 'angular2-uuid';
import {MatVerticalStepper} from '@angular/material';

/**
 * @title Stepper vertical
 */
// tslint:disable-next-line:prefer-const
let userp = {} as user;

@Component({
  selector: 'app-registertable',
  templateUrl: './registertable.component.html',
  styleUrls: ['./registertable.component.css']
})
export class RegistertableComponent implements OnInit {
  @ViewChild(MatVerticalStepper) stepper: MatVerticalStepper;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  hide = true;

  constructor(private _formBuilder: FormBuilder, private registersever: RegisterService) {
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
  }

  register() {
    this.registersever.checkName(this.firstFormGroup.get('firstCtrl').value).subscribe(data => {
      if (data.message === 'Ok') {
        const objFile = document.getElementById('img') as HTMLInputElement;
        var teacher = new FormData();
        teacher.append('name', this.firstFormGroup.get('firstCtrl').value);
        teacher.append('password', this.secondFormGroup.get('secondCtrl').value);
        teacher.append('head', objFile.files[0]);
        // userp.open_course = [];
        console.log(teacher);
        this.registersever.postUser(teacher);
        location.href = 'login';
      } else {
        alert('用户名已存在！');
      }
    });

  }

}

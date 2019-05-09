import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
    userp.id = UUID.UUID();
    userp.name = this.firstFormGroup.get('firstCtrl').value;
    userp.password = this.secondFormGroup.get('secondCtrl').value;
    userp.head = this.thirdFormGroup.get('thirdCtrl').value;
    userp.open_course = [];
    console.log(JSON.stringify(userp));
    this.registersever.postUser(userp);
    location.href = 'login';
  }

}

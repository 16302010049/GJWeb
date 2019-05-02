import {Component, OnInit} from '@angular/core';
import {Course} from '../dataType/course';
import {Index} from '../dataType';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})

export class HomeworkComponent implements OnInit {
  ChaIndex: number;
  SecIndex: number;
  lesson: Course;
  constructor() {
  }

  ngOnInit() {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    this.ChaIndex = -1;
    this.SecIndex = -1;
  }

  getChildEvent(inx: Index) {
    this.lesson = JSON.parse(localStorage.getItem('lesson'));
    this.ChaIndex = inx.ChaIndex;
    this.SecIndex = inx.SecIndex;
  }
}

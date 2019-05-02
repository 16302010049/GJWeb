import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../dataType/course';

@Component({
  selector: 'app-lessontab',
  templateUrl: './lessontab.component.html',
  styleUrls: ['./lessontab.component.css']
})
export class LessontabComponent implements OnInit {
  lesson: Course;

  constructor() {
  }

  ngOnInit() {
    this.lesson =  JSON.parse(localStorage.getItem('lesson'));
  }
}

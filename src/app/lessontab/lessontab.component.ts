import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lessontab',
  templateUrl: './lessontab.component.html',
  styleUrls: ['./lessontab.component.css']
})
export class LessontabComponent implements OnInit {
  @Input() lesssonname: string;

  constructor() {
  }

  ngOnInit() {
  }


}

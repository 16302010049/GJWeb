import {Component, OnInit} from '@angular/core';

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-lessoncontain',
  templateUrl: './lessoncontain.component.html',
  styleUrls: ['./lessoncontain.component.css']
})
export class LessoncontainComponent implements OnInit {
  constructor() {
  }


  ngOnInit() {
  }

}

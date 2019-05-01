import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkdesigmComponent } from './homeworkdesigm.component';

describe('HomeworkdesigmComponent', () => {
  let component: HomeworkdesigmComponent;
  let fixture: ComponentFixture<HomeworkdesigmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkdesigmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkdesigmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

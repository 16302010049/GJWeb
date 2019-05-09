import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkdialogComponent } from './homeworkdialog.component';

describe('HomeworkdialogComponent', () => {
  let component: HomeworkdialogComponent;
  let fixture: ComponentFixture<HomeworkdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

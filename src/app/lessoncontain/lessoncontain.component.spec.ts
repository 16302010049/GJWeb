import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessoncontainComponent } from './lessoncontain.component';

describe('LessoncontainComponent', () => {
  let component: LessoncontainComponent;
  let fixture: ComponentFixture<LessoncontainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessoncontainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessoncontainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

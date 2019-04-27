import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessontabComponent } from './lessontab.component';

describe('LessontabComponent', () => {
  let component: LessontabComponent;
  let fixture: ComponentFixture<LessontabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessontabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessontabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

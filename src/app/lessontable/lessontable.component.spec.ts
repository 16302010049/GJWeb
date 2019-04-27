import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessontableComponent } from './lessontable.component';

describe('LessontableComponent', () => {
  let component: LessontableComponent;
  let fixture: ComponentFixture<LessontableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessontableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

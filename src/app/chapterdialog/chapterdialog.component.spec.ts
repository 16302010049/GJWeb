import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterdialogComponent } from './chapterdialog.component';

describe('ChapterdialogComponent', () => {
  let component: ChapterdialogComponent;
  let fixture: ComponentFixture<ChapterdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

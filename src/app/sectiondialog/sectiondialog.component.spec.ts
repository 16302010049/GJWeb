import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiondialogComponent } from './sectiondialog.component';

describe('SectiondialogComponent', () => {
  let component: SectiondialogComponent;
  let fixture: ComponentFixture<SectiondialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectiondialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectiondialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

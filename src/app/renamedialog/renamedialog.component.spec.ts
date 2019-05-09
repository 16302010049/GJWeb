import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenamedialogComponent } from './renamedialog.component';

describe('RenamedialogComponent', () => {
  let component: RenamedialogComponent;
  let fixture: ComponentFixture<RenamedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenamedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenamedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharpterlistComponent } from './charpterlist.component';

describe('CharpterlistComponent', () => {
  let component: CharpterlistComponent;
  let fixture: ComponentFixture<CharpterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharpterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharpterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoard2Component } from './display-board2.component';

describe('DisplayBoard2Component', () => {
  let component: DisplayBoard2Component;
  let fixture: ComponentFixture<DisplayBoard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBoard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBoard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

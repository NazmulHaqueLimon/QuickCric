import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreLiveComponent } from './score-live.component';

describe('ScoreLiveComponent', () => {
  let component: ScoreLiveComponent;
  let fixture: ComponentFixture<ScoreLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

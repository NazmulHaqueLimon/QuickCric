import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangeMatchComponent } from './arrange-match.component';

describe('ArrangeMatchComponent', () => {
  let component: ArrangeMatchComponent;
  let fixture: ComponentFixture<ArrangeMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrangeMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangeMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

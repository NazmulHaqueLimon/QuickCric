import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizingComponent } from './organizing.component';


describe('OrganizingComponent', () => {
  let component: OrganizingComponent;
  let fixture: ComponentFixture<OrganizingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeConstraintComponent } from './time-constraint.component';

describe('TimeConstraintComponent', () => {
  let component: TimeConstraintComponent;
  let fixture: ComponentFixture<TimeConstraintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeConstraintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeConstraintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

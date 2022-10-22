import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampConstraintsComponent } from './timestamp-constraints.component';

describe('TimestampConstraintsComponent', () => {
  let component: TimestampConstraintsComponent;
  let fixture: ComponentFixture<TimestampConstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimestampConstraintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimestampConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueConstraintComponent } from './value-constraint.component';

describe('ValueConstraintComponent', () => {
  let component: ValueConstraintComponent;
  let fixture: ComponentFixture<ValueConstraintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueConstraintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueConstraintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiValuesConstraintComponent } from './multi-values-constraint.component';

describe('MultiValuesConstraintComponent', () => {
  let component: MultiValuesConstraintComponent;
  let fixture: ComponentFixture<MultiValuesConstraintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiValuesConstraintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiValuesConstraintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

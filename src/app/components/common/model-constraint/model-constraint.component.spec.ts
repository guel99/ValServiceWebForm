import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelConstraintComponent } from './model-constraint.component';

describe('ModelConstraintComponent', () => {
  let component: ModelConstraintComponent;
  let fixture: ComponentFixture<ModelConstraintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelConstraintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelConstraintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

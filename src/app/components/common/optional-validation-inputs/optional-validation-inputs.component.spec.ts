import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalValidationInputsComponent } from './optional-validation-inputs.component';

describe('OptionalValidationInputsComponent', () => {
  let component: OptionalValidationInputsComponent;
  let fixture: ComponentFixture<OptionalValidationInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalValidationInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionalValidationInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

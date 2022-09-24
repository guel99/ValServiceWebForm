import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptographicConstraintComponent } from './cryptographic-constraint.component';

describe('CryptographicConstraintComponent', () => {
  let component: CryptographicConstraintComponent;
  let fixture: ComponentFixture<CryptographicConstraintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptographicConstraintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptographicConstraintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

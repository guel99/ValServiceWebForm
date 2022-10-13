import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureConstraintsComponent } from './signature-constraints.component';

describe('SignatureConstraintsComponent', () => {
  let component: SignatureConstraintsComponent;
  let fixture: ComponentFixture<SignatureConstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureConstraintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignatureConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

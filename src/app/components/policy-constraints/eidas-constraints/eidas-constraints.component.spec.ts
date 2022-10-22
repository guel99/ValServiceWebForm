import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EidasConstraintsComponent } from './eidas-constraints.component';

describe('EidasConstraintsComponent', () => {
  let component: EidasConstraintsComponent;
  let fixture: ComponentFixture<EidasConstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EidasConstraintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EidasConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevocationConstraintsComponent } from './revocation-constraints.component';

describe('RevocationConstraintsComponent', () => {
  let component: RevocationConstraintsComponent;
  let fixture: ComponentFixture<RevocationConstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevocationConstraintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevocationConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

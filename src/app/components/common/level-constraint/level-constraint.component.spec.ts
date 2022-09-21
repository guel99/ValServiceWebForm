import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelConstraintComponent } from './level-constraint.component';

describe('LevelConstraintComponent', () => {
  let component: LevelConstraintComponent;
  let fixture: ComponentFixture<LevelConstraintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelConstraintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelConstraintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

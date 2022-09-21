import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerConstraintsComponent } from './container-constraints.component';

describe('ContainerConstraintsComponent', () => {
  let component: ContainerConstraintsComponent;
  let fixture: ComponentFixture<ContainerConstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerConstraintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

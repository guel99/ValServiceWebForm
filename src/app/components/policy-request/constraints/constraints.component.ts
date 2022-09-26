import { Component, Input, OnInit } from '@angular/core';
import { ConstraintsConfiguration } from 'src/app/configs/constraints-config';
import { Constraints } from 'src/app/configs/constraints-types/constraints';
import { ContainerConstraints } from 'src/app/configs/constraints-types/container-constraints';
import { ConstraintType } from 'src/app/model/enums/policy/constraint-types';

@Component({
  selector: 'app-constraints',
  templateUrl: './constraints.component.html',
  styleUrls: ['./constraints.component.css']
})
export class ConstraintsComponent implements OnInit {

  /**
   * The container constraints instruction to be given to the user
   */
  @Input()
  constraints_config: Constraints;

  constructor() { }

  ngOnInit(): void {
  }

  isLevelConstraint(constraint: any): boolean {
    return constraint.type == ConstraintType.LEVEL_CONSTRAINT;
  }

  isMultiValuesConstraint(constraint: any): boolean {
    return constraint.type == ConstraintType.MULTI_VALUES_CONSTRAINT;
  }

  isTimeConstraint(constraint: any): boolean {
    return constraint.type == ConstraintType.TIME_CONSTRAINT;
  }

  isValueConstraint(constraint: any): boolean {
    return constraint.type == ConstraintType.VALUE_CONSTRAINT;
  }

  isCryptographicConstraint(constraint: any): boolean {
    return constraint.type == ConstraintType.CRYPTOGRAPHIC_CONSTRAINT;
  }

  /**
   * Tells if a contraint elem is complex or not
   * @param constraint 
   * @returns 
   */
  isComplexConstraint(constraint: any): boolean {
    return Constraints.isComplex(constraint.type);
  }

  getBasicConstraints(instruction: string): Constraints {
    return this.constraints_config.getSimpleConstraintsElements(instruction);
  }
}

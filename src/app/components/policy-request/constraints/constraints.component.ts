import { Component, Input, OnInit } from '@angular/core';
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
  instruction: string;

  /**
   * The containerConstraints object
   */
  @Input()
  constraints: any;

  constructor() { }

  ngOnInit(): void {
  }

  isLevelConstraint(constraint: any): boolean {
    return constraint.type == ConstraintType.LEVEL_CONSTRAINT;
  }

  isMultiValuesConstraint(constraint: any): boolean {
    return constraint.type == ConstraintType.MULTI_VALUES_CONSTRAINT;
  }
}

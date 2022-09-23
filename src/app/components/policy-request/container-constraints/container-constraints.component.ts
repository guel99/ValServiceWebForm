import { Component, OnInit } from '@angular/core';
import { type } from 'os';
import { ContainerConstraints } from 'src/app/configs/constraints-types/container-constraints';
import { ConstraintType } from 'src/app/model/enums/policy/constraint-types';

@Component({
  selector: 'app-container-constraints',
  templateUrl: './container-constraints.component.html',
  styleUrls: ['./container-constraints.component.css']
})
export class ContainerConstraintsComponent implements OnInit {

  /**
   * The container constraints instruction to be given to the user
   */
  instruction: string = new ContainerConstraints().instruction;

  /**
   * The containerConstraints object
   */
  constraints = new ContainerConstraints().constraints;

  constructor() { }

  ngOnInit(): void {
  }

  isLevelConstraint(constraint: any) : boolean {
    return constraint.type == ConstraintType.LEVEL_CONSTRAINT;
  }

  isMultiValuesConstraint(constraint: any) : boolean {
    return constraint.type == ConstraintType.MULTI_VALUES_CONSTRAINT;
  }

}

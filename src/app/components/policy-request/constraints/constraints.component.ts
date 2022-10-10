import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constraints } from 'src/app/configs/constraints-types/constraints';
import { ConstraintDTO } from 'src/app/model/dto/constraint-dto';
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

  simpleChildren?: Constraints;

  complexChildren?: Array<Constraints>;

  /**
   * The contraints added by the user
   */
  enabledConstraints: Map<string, ConstraintDTO>;

  @Output()
  changedConstraintSet: EventEmitter<any>; // terminar implementação de evento triggered quando o map enabledConstraints é modificado!!!!

  constructor() { 
    this.enabledConstraints = new Map<string, ConstraintDTO>();
    this.changedConstraintSet = new EventEmitter<any>();
  }

  ngOnInit(): void {

    this.simpleChildren = new Constraints("Simple " + this.constraints_config.ruleName.toLowerCase(), undefined, this.constraints_config.getSimpleConstraintsElements());
    //console.log(this.simpleChildren);
    this.complexChildren = this.constraints_config.getComplexConstraintsElements();
    //console.log(this.complexChildren);
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
   * Adds an item to the enabledConstraints mapping
   * @param constraintName The name of the constraint being set
   * @param constraint The constraint enabled
   */
  addConstraintDTO(constraintName: string, constraint: any) {
    this.enabledConstraints.set(constraintName, constraint);
    this.changedConstraintSet.emit(this.enabledConstraints);
    //console.log(this.enabledConstraints);
  }

  /**
   * Delete a constraint from the map
   * @param constraintName
   */
  deleteConstraintDTO(constraintName: string) {
    this.enabledConstraints.delete(constraintName);
    this.changedConstraintSet.emit(this.enabledConstraints);
  }
}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MultiValuesConstraintDTO } from 'src/app/model/dto/multi-values-constraint-dto';
import { LevelConstraintComponent } from '../level-constraint/level-constraint.component';

@Component({
  selector: 'app-multi-values-constraint',
  templateUrl: './multi-values-constraint.component.html',
  styleUrls: ['./multi-values-constraint.component.css']
})
export class MultiValuesConstraintComponent extends LevelConstraintComponent implements OnInit {

  /**
   * The value inserted by the 
   * user in the form
   */
  newAcceptedValue: string;

  /**
   * The instruction to be given to the user in order 
   * to specify the container constraints required by him
   */
  @Input()
  instruction: string;

  /**
   * Regular expression to validate a new 
   * value introduced by the user
   */
  @Input()
  pattern?: string;

  /**
   * Message to be displayed in the text 
   * input placeholder
   */
  @Input()
  placeholder?: string;

  /**
   * Error message to be displayed when the 
   * introduced value is not valid acording 
   * with the required pattern
   */
  @Input()
  onWrongValue?: string;

  /**
   * Error message to be displayed when the 
   * input is changed and the introduced value 
   * is an empty string
   */
  @Input()
  onEmptyValue?: string;

  /**
   * The list of accepted values of 
   * the rule
   */
  acceptedValues: Array<string>;

  /**
   * The state of the constraint. Open 
   * or checked by the user
   */
  checked: boolean;

  constructor() {
    super();
    this.checked = false;
    this.acceptedValues = new Array<string>();
  }

  hasValues(): boolean {
    return this.acceptedValues.length > 0;
  }

  override ngOnInit(): void {
  }

  addValue(value: string) {
    console.log(value);
  }

  log(x: any) {
    console.log(x);
  }

  /**
   * Change the selected level
   * @param event The event triggered by the 
   * constraint level alteration
   */
  override setLevel() {
    this.selected = this.selected?.toUpperCase();
    var multiValuesConstraintDTO = new MultiValuesConstraintDTO();
    multiValuesConstraintDTO.level = this.selected!;
    multiValuesConstraintDTO.acceptedValues = this.acceptedValues;
    this.setted.emit(multiValuesConstraintDTO);
    //console.log(this.getLevelString());
  }

  override disable(): void {
    if (!this.disabled) {
      this.collapsed.emit();
    }
    this.disabled = !this.disabled;
    this.selected = undefined;
  }

  add() {
    if (!this.acceptedValues.includes(this.newAcceptedValue))
      this.acceptedValues.push(this.newAcceptedValue);
  }

  deleteValue(value: string) {
    const index: number = this.acceptedValues.indexOf(value);
    if (index !== -1) {
      this.acceptedValues.splice(index, 1);
    }
  }

  check() {
    this.checked = true;
  }

  edit() {
    this.checked = false;
    this.collapsed.emit();
  }
}

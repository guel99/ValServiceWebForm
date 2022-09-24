import { Component, Input, OnInit } from '@angular/core';
import { LevelConstraintComponent } from '../level-constraint/level-constraint.component';

@Component({
  selector: 'app-value-constraint',
  templateUrl: './value-constraint.component.html',
  styleUrls: ['./value-constraint.component.css']
})
export class ValueConstraintComponent extends LevelConstraintComponent implements OnInit {

  /**
   * The constraint value
   */
  value: string;

  /**
   * Tells if the value was checked by the user
   */
  checked: boolean;

  /**
   * A pattern to validate an introduced value
   */
  @Input()
  pattern? : string;

  /**
   * A message to be displayed when the 
   * input is empty 
   */
  @Input()
  onEmptyValue? : string;

  /**
   * A message to be displayed when the 
   * input is invalid 
   */
  @Input()
  onWrongValue? : string;

  /**
   * A placeholder message to be displayed 
   * in the text input box
   */
  @Input()
  placeholder?: string;

  constructor() { super(); }

  override ngOnInit(): void {
  }

  
}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multi-values-constraint',
  templateUrl: './multi-values-constraint.component.html',
  styleUrls: ['./multi-values-constraint.component.css']
})
export class MultiValuesConstraintComponent implements OnInit {

  /**
   * The value inserted by the 
   * user in the form
   */
  newAcceptedValue: string;

  /**
   * The name of the rule
   */
  @Input()
  ruleName: string;

  /**
   * Regular expression to validate a new 
   * value introduced by the user
   */
  @Input()
  pattern?: string;

  /**
   * True if the rule is disabled
   */
  disabled: boolean;

  /**
   * The level constraint of the rule
   */
  level?: string;

  /**
   * The list of accepted values of 
   * the rule
   */
  acceptedValues: Array<string>;

  constructor() { 
    this.disabled = false;
    this.level = undefined;
    this.acceptedValues = new Array<string>();
  }

  ngOnInit(): void {
  }

  disable() {
    this.disabled = !this.disabled;
    this.level = undefined;
  }

  setLevel(event: any) {
    this.level = event.target.id;
  }

  addValue(value: string) {
    console.log(value);
  }

  log(x: any){
    console.log(x);
  }

  add() {
    if(!this.acceptedValues.includes(this.newAcceptedValue))
      this.acceptedValues.push(this.newAcceptedValue);
  }

  deleteValue(value: string){
    const index: number = this.acceptedValues.indexOf(value);
    if(index !== -1) {
      this.acceptedValues.splice(index, 1);
    }
  }
}

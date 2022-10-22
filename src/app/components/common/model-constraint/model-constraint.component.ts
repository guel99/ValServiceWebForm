import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-model-constraint',
  templateUrl: './model-constraint.component.html',
  styleUrls: ['./model-constraint.component.css']
})
export class ModelConstraintComponent implements OnInit {

  modelsList: Array<String> = [
    "SHELL",
    "CHAIN",
    "HYBRID"
  ]

  /**
   * Indicates if the rule is 
   * disabled or not
   */
  @Input()
  disabled: boolean;

  /**
   * The name of the rule
   */
  @Input()
  ruleName: string;

  /**
   * Triggered event on setted/changed level value of the constraint
   */
   @Output()
   setted: EventEmitter<any> = new EventEmitter();
 
   /**
    * Triggered event on disabled constraint
    */
   @Output()
   collapsed: EventEmitter<any> = new EventEmitter();

  selected?: string;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Change between enabled and disabled 
   * state of the rule
   */
  disable() {
    this.disabled = !this.disabled;
    this.selected = undefined;
    if(this.disabled) this.collapsed.emit();
  }

  /**
   * Select a model on an event trigger
   * @param event
   */
  setModel(){
    this.setted.emit(this.selected);
  }

}

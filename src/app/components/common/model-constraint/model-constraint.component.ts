import { Component, Input, OnInit } from '@angular/core';

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
  }

  /**
   * Select a model on an event trigger
   * @param event
   */
  setModel(event: any){
    this.selected = event.target.id;
  }

}

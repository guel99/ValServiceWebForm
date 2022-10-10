import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LevelConstraintDTO } from 'src/app/model/dto/level-constraint-dto';

@Component({
  selector: 'app-level-constraint',
  templateUrl: './level-constraint.component.html',
  styleUrls: ['./level-constraint.component.css']
})
export class LevelConstraintComponent implements OnInit {

  @Input()
  ruleName: string;

  @Input()
  disabled: boolean;

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

  @ViewChild('levelRadio')
  levelRadio: NgModel;

  selected?: string;

  readonly availableLevels: Array<string> = ["FAIL", "WARN", "INFORM", "IGNORE"];

  constructor() {
    this.selected = undefined;
  }

  ngOnInit(): void {
  }

  /**
   * Change the selected level
   * @param event The event triggered by the 
   * constraint level alteration
   */
  setLevel(){
    this.selected = this.selected;
    this.setted.emit(this.selected);
    //console.log(this.getLevelString());
  }

  /**
   * Disable the constraint
   */
  disable() {
    if(!this.disabled){
      this.collapsed.emit();
    }
    this.disabled = !this.disabled;
    this.selected = undefined;
    //console.log(this.getLevelString());
  }

  /**
   * Get the selected value of the constraint
   * @returns The constraint level selected
   */
  getLevelString() : string | undefined {
    return this.selected?.toUpperCase();
  }
}

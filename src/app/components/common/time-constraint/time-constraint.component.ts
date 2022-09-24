import { Component, Input, OnInit } from '@angular/core';
import { LevelConstraintComponent } from '../level-constraint/level-constraint.component';

@Component({
  selector: 'app-time-constraint',
  templateUrl: './time-constraint.component.html',
  styleUrls: ['./time-constraint.component.css']
})
export class TimeConstraintComponent extends LevelConstraintComponent implements OnInit {

  /**
   * Value introduced by the user
   */
  value: number;

  /**
   * Value selected by the user to timeUnit
   */
  timeUnitValue: string;

  /**
   * Tells if the time constraint was close (checked)
   */
  checked: boolean;

  /**
   * Available time units
   */
  readonly validTimeUnits: Array<string> = ["DAYS",
    "HOURS",
    "MINUTES",
    "SECONDS",
    "MILLISECONDS"];

  constructor() {
    super();
    this.checked = false;
  }

  override ngOnInit(): void {
  }

  log(obj: any){
    console.log(obj)
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { TimeConstraintDTO } from 'src/app/model/dto/time-constraint-dto';
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

  override setLevel(): void {
      var timeConstraint = new TimeConstraintDTO();
      timeConstraint.timeUnit = this.timeUnitValue;
      timeConstraint.value = this.value;
      this.setted.emit(timeConstraint);
  }

  log(obj: any){
    console.log(obj)
  }
}

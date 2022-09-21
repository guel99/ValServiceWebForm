import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-constraint',
  templateUrl: './level-constraint.component.html',
  styleUrls: ['./level-constraint.component.css']
})
export class LevelConstraintComponent implements OnInit {

  @Input()
  ruleName: string;

  collapsed: boolean;

  selected?: string;

  constructor() { 
    this.collapsed = false;
  }

  ngOnInit(): void {
  }

  /**
   * Change the selected level
   * @param event The event triggered by the 
   * constraint level alteration
   */
  setLevel(event: any){
    this.selected = event.target.id;
    //console.log(this.getLevelString());
  }

  /**
   * Disable the constraint
   */
  disable() {
    this.collapsed = !this.collapsed;
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

import { Component, OnInit } from '@angular/core';
import { ConstraintDTO } from 'src/app/model/dto/constraint-dto';
import { TimeStampConstraintsDTO } from 'src/app/model/dto/time-stamp-constraints-dto';
import { ConstraintsComponent } from '../../policy-request/constraints/constraints.component';

@Component({
  selector: 'app-timestamp-constraints',
  templateUrl: './timestamp-constraints.component.html',
  styleUrls: ['./timestamp-constraints.component.css']
})
export class TimestampConstraintsComponent extends ConstraintsComponent implements OnInit {

  constructor() {
    super();
  }

  createDTO(dic: Map<string, ConstraintDTO>){
    var timestampConstraints = new TimeStampConstraintsDTO();
    timestampConstraints.populate(dic);
    this.changedConstraintSet.emit(timestampConstraints);
  }

}

import { Component, OnInit } from '@angular/core';
import { ConstraintDTO } from 'src/app/model/dto/constraint-dto';
import { EidasDTO } from 'src/app/model/dto/eidas-dto';
import { ConstraintsComponent } from '../../policy-request/constraints/constraints.component';

@Component({
  selector: 'app-eidas-constraints',
  templateUrl: './eidas-constraints.component.html',
  styleUrls: ['./eidas-constraints.component.css']
})
export class EidasConstraintsComponent extends ConstraintsComponent implements OnInit {

  constructor() {
    super();
  }

  createDTO(dic: Map<string, ConstraintDTO>) {
    var eidasConstraints = new EidasDTO();
    eidasConstraints.populate(dic);
    this.changedConstraintSet.emit(eidasConstraints);
  }
}

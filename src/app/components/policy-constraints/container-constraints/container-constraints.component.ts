import { Component, OnInit } from '@angular/core';
import { ConstraintDTO } from 'src/app/model/dto/constraint-dto';
import { ContainerConstraintsDTO } from 'src/app/model/dto/container-constraints-dto';
import { MultiValuesConstraintDTO } from 'src/app/model/dto/multi-values-constraint-dto';
import { ConstraintsComponent } from '../../policy-request/constraints/constraints.component';

@Component({
  selector: 'app-container-constraints',
  templateUrl: './container-constraints.component.html',
  styleUrls: ['./container-constraints.component.css']
})
export class ContainerConstraintsComponent extends ConstraintsComponent implements OnInit {

  constructor() {
    super();
  }

  createDTO(dic: Map<string, any>) {
    var containerConstraintsDTO = new ContainerConstraintsDTO();
    containerConstraintsDTO.populate(dic);
    this.changedConstraintSet.emit(containerConstraintsDTO);
  }
}

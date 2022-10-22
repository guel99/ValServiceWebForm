import { Component, OnInit } from '@angular/core';
import { ConstraintDTO } from 'src/app/model/dto/constraint-dto';
import { RevocationConstraintsDTO } from 'src/app/model/dto/revocation-constraints-dto';
import { ConstraintsComponent } from '../../policy-request/constraints/constraints.component';

@Component({
  selector: 'app-revocation-constraints',
  templateUrl: './revocation-constraints.component.html',
  styleUrls: ['./revocation-constraints.component.css']
})
export class RevocationConstraintsComponent extends ConstraintsComponent implements OnInit {

  constructor() { 
    super();
  }
  
  createDTO(dic: Map<string, ConstraintDTO>){
    var revocationConstraints = new RevocationConstraintsDTO();
    revocationConstraints.populate(dic);
    this.changedConstraintSet.emit(revocationConstraints);
  }

}

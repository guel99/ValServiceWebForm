import { Component, OnInit } from '@angular/core';
import { SignatureConstraintsDTO } from 'src/app/model/dto/signature-constraints-dto';
import { ConstraintsComponent } from '../../policy-request/constraints/constraints.component';

@Component({
  selector: 'app-signature-constraints',
  templateUrl: './signature-constraints.component.html',
  styleUrls: ['./signature-constraints.component.css']
})
export class SignatureConstraintsComponent extends ConstraintsComponent implements OnInit {

  constructor() { 
    super();
  }

  createDTO(dic: Map<string, any>){
    var signatureConstraints = new SignatureConstraintsDTO();
		signatureConstraints.populate(dic);
    this.changedConstraintSet.emit(signatureConstraints);
  }

}

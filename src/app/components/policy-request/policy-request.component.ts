import { Component, OnInit } from '@angular/core';
import { ConstraintsConfiguration } from 'src/app/configs/constraints-config';
import { Constraints } from 'src/app/configs/constraints-types/constraints';
import { ValidationPolicyDTO } from 'src/app/model/dto/validation-policy-dto';

@Component({
  selector: 'app-policy-request',
  templateUrl: './policy-request.component.html',
  styleUrls: ['./policy-request.component.css']
})
export class PolicyRequestComponent implements OnInit {

  /**
   * The confired constraint objects to be displayed to the user
   */
  containerConst: Constraints = ConstraintsConfiguration.container;
  signatureConst: Constraints = ConstraintsConfiguration.signature;
  counterSigConst: Constraints = ConstraintsConfiguration.counterSignature;
  timestampConst: Constraints = ConstraintsConfiguration.timestamp;
  revocationConst: Constraints = ConstraintsConfiguration.revocation;
  eidasConst: Constraints = ConstraintsConfiguration.eidas;

  policyRequest: ValidationPolicyDTO;

  constructor() { 
    this.policyRequest = new ValidationPolicyDTO();
  }

  ngOnInit(): void {
  }

  log(any: any){
    console.log(any);
  }

}

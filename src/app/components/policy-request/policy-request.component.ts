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

  /**
   * The validation policy request object built based on the angular app
   */
  policyRequest: ValidationPolicyDTO;

  /**
   * The instruction that is displayed to the user
   */
  pageInstruction: string = "Here you can assemble your own signature validation policy!";

  /**
   * The error message that will be displayed to the user 
   * if the policy description is not provided by the user.
   */
  requiredErrorMessage: string = "The policy discription is the only mandatory parameter for a DSS signature validation policy."

  constructor() { 
    this.policyRequest = new ValidationPolicyDTO();
  }

  ngOnInit(): void {
  }

  log(any: any){
    console.log(any);
  }

}

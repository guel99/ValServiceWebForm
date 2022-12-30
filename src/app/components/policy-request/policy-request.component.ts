import { Component, OnInit } from '@angular/core';
import { ConstraintsConfiguration } from 'src/app/configs/constraints-config';
import { Constraints } from 'src/app/configs/constraints-types/constraints';
import { ValidationPolicyDTO } from 'src/app/model/dto/validation-policy-dto';
import { Encoding } from 'src/app/model/utils/encoding';
import { FeedBackService } from 'src/app/service/feedback.service';
import { FileSaveService } from 'src/app/service/file-save.service';
import { PolicyService } from 'src/app/service/policy.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

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

  /**
   * Boolean that indicates if the request was submitted by the user
   */
  submittedRequest: boolean = false;

  /**
   * Policy creation modes
   */
  policyCreationModes: Array<string> = ["free", "safe"];

  selectedMode?: string = "safe";

  constructor(private policyService: PolicyService, private feedbackService: FeedBackService, private fileSaveService: FileSaveService) { 
    this.policyRequest = new ValidationPolicyDTO();
  }

  ngOnInit(): void {
  }

  log(any: any){
    console.log(any);
  }

  submit(){
    this.log(this.policyRequest);
    this.submittedRequest = true;
    this.policyService.createPolicy(this.policyRequest, this.selectedMode!).then(response => {
      response.subscribe(policyResponse => {
        this.alert("Policy created", this.feedbackService.getSuccessMessage(policyResponse.policyId, policyResponse.timestamp), 'success').then(save => {
          if(save.value){
            this.policyService.get(policyResponse.policyId).then(response => {
              response.subscribe(policyData => {
                this.submittedRequest = false;
                this.fileSaveService.save(policyResponse.policyId, 'xml', Encoding.fromB4String(policyData.policyXmlB64), 'application/xml');
                window.location.reload();
              });
            });
          }
        });
      });
    }).catch(error => {
      this.alert("Error on policy creation process", error, 'error');
    });
  }

  alert(title: string, message: string, icon: SweetAlertIcon) {
    return Swal.fire<boolean>({
      title: title,
      text: message,
      icon: icon,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: '#05487f'
    });
  }

}

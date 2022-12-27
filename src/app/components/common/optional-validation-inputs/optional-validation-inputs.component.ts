import { Component, EventEmitter, Output } from '@angular/core';
import { catchError } from 'rxjs';
import { RemotePolicyDTO } from 'src/app/model/dto/remote-policy-dto';
import { OtherOptions } from 'src/app/model/utils/validate-other-options';
import { PolicyService } from 'src/app/service/policy.service';

@Component({
  selector: 'app-optional-validation-inputs',
  templateUrl: './optional-validation-inputs.component.html',
  styleUrls: ['./optional-validation-inputs.component.css']
})
export class OptionalValidationInputsComponent {

  @Output()
  optsChanged: EventEmitter<OtherOptions> = new EventEmitter<OtherOptions>();

  /**
   * Variable that stored the results 
   * of the last policy search
   */
  searchResults?: Array<RemotePolicyDTO> = new Array<RemotePolicyDTO>();

  /**
   * Variable that stores the last 
   * search error message
   */
  searchErrorMessage?: String = undefined;

  disabledComponent: boolean = false;

  disabled: boolean = true;

  specifyCertificates: boolean = false;

  specifyPolicy: boolean = false;

  private _opts: OtherOptions = new OtherOptions();

  get value() {
    return this._opts;
  }

  constructor(private policyService: PolicyService) {
  }

  disable() {
    this.disabled = !this.disabled;
  }

  onPolicyFileSelected(event: Event) {
    var selected = (event.target as HTMLInputElement).files;
    if (selected?.item(0) != undefined) {
      this.value.policy = selected?.item(0) as File;
      this.optsChanged.emit(this._opts);
    }
  }

  onCertificateFileSelected(event: Event) {
    var selected = (event.target as HTMLInputElement).files;
    if (selected?.item(0) != undefined) {
      this.value.certificateSource.push(selected?.item(0) as File);
      this.optsChanged.emit(this._opts);
    }
  }

  onSignedETSIReportChange() {
    this.optsChanged.emit(this._opts);
  }

  onRemotePolicySelected(policyId: RemotePolicyDTO) {
    this._opts.policy = policyId;
    this.searchResults?.splice(0);
    this.searchErrorMessage = undefined;
    this.optsChanged.emit(this._opts);
  }

  clearLastCertificate() {
    if (this._opts.certificateSource.length > 0) {
      this.value.certificateSource.pop();
      this.optsChanged.emit(this._opts);
    }
  }

  searchPolicy(token: String) {
    //console.log("Searching for '" + searchStr + "'");
    this.policyService.searchPolicyByToken(token)
      .then(values => {
        values
          .pipe((catchError((err, caught) => {
            console.log(err);
            this.searchResults = undefined;
            this.searchErrorMessage = err.error.body;
            return [];
          })))
          .subscribe(
            foundIds => {
              this.searchResults = foundIds;
              this.searchErrorMessage = undefined;
              console.log(this.searchResults);
            })
      })
      .catch(ex => {
        console.log("error obtained: " + ex);
      });
  }

}

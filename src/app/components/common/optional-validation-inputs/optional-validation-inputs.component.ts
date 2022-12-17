import { Component, EventEmitter, Output } from '@angular/core';
import { OtherOptions } from 'src/app/model/utils/validate-other-options';

@Component({
  selector: 'app-optional-validation-inputs',
  templateUrl: './optional-validation-inputs.component.html',
  styleUrls: ['./optional-validation-inputs.component.css']
})
export class OptionalValidationInputsComponent {

  @Output()
  optsChanged: EventEmitter<OtherOptions> = new EventEmitter<OtherOptions>();

  disabledComponent: boolean = false;

  disabled: boolean = true;

  specifyCertificates: boolean = false;

  specifyPolicy: boolean = false;

  private _opts: OtherOptions = new OtherOptions();

  get value() {
    return this._opts;
  }

  constructor() { }

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

  onSignedETSIReportChange(){
    this.optsChanged.emit(this._opts);
  }

  clearLastCertificate() {
    if (this._opts.certificateSource.length > 0) {
      this.value.certificateSource.pop();
      this.optsChanged.emit(this._opts);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { OtherOptions } from 'src/app/model/utils/validate-other-options';
import { ValRequestAssembler } from 'src/app/model/utils/valReqAssembler';
import { ValidationResponse } from 'src/app/model/validationResponse';
import { ResponseHandlingService } from 'src/app/service/responseHandling.service';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-validation-request',
  templateUrl: './validation-request.component.html',
  styleUrls: ['./validation-request.component.css']
})
export class ValidationRequestComponent implements OnInit {

  readonly adesTypes: Array<string> = ["ASiC", "CAdES", "JAdES", "PAdES", "XAdES"];

  readonly adesRelPosition = ["Enveloped", "Enveloping", "Detached", "Internally detached"];

  readonly availablePackagingPerAdesType: Map<string, Array<boolean>> = new Map<string, Array<boolean>>([
    ["ASiC", [true, true, true, true]],
    ["CAdES", [true, false, false, true]],
    ["JAdES", [true, false, false, true]],
    ["PAdES", [false, true, true, true]],
    ["XAdES", [false, false, false, false]]
  ]);

  /**
   * The disabled status of each packaging type
   */
  packagingStatus: Array<boolean> = [true, true, true, true];

  /**
   * The type of AdES signature 
   * selected
   */
  selected?: string = undefined;

  /**
   * The singature relative position 
   * to signed data
   */
  relativePosition?: string = undefined;

  /**
   * Original files uploaded by the client
   */
  signedFiles: Array<File>;

  signatureFile?: File;

  /**
   * Response sent by the backoffice component
   */
  validationResponse: ValidationResponse | null = null;

  /**
   * Boolean that indicates if the request was 
   * sent to the back-end server
   */
  sentRequest: boolean = false;

  other_opts: OtherOptions = new OtherOptions();

  /**
   * Reports to be displayed
   */
  simpleReport: string | null = null;
  detailedReport: string | null = null;
  diagnosticData: string | null = null;
  etsiReport: string | null = null;

  constructor(private validationService: ValidationService,
    private responseHandlingService: ResponseHandlingService) { }

  ngOnInit(): void {
    this.selected = undefined;
    this.relativePosition = undefined;
    this.signedFiles = new Array<File>();
    this.signatureFile = undefined;
  }

  setAdesPossiblePackagingOptions(selected: string) {
    this.packagingStatus = this.availablePackagingPerAdesType.get(selected)!;
    this.relativePosition = undefined;
  }

  uncheckAllRelativePosOpts(): void {
    var list = document.getElementsByName("relPosType");
    list.forEach(elem => (elem as HTMLInputElement).checked = false);
  }

  getSignedFileNames(): Array<string> {
    var ret = new Array<string>();
    for (const file of this.signedFiles) {
      ret.push(file.name);
    }
    return ret;
  }

  /**
   * Handles the selected original files event
   * @param event
   */
  onSignedFilesSelected(event: Event) {
    var selected = (event.target as HTMLInputElement).files;
    var size = selected != undefined ? selected?.length : 0;
    for (var i = 0; i < size; i++) {
      if (selected?.item(i) != undefined) {
        var file = selected?.item(i) as File;
        this.signedFiles.push(file);
      }
    }
  }

  /**
   * Handles the selected signed file event
   * @param event 
   */
  onSignatureFileSelected(event: Event) {
    var selected = (event.target as HTMLInputElement).files;
    if (selected?.item(0) != undefined) {
      this.signatureFile = selected?.item(0) as File;
    }
  }

  /**
   * Tells when the form is ready to sumbit 
   * the validation request to the back-office
   * @returns 
   */
  readyToSubmit(): boolean {
    var ready = this.selected != undefined && this.relativePosition != undefined;

    if (this.selected == "ASiC")
      ready = this.signatureFile != undefined;
    else {
      switch (this.relativePosition) {

        case "Enveloped":
          ready = this.signedFiles.length == 1;
          break;
        case "Enveloping":
          ready = this.signatureFile != undefined;
          break;
        case "Detached":
          ready = this.signedFiles.length >= 1 && this.signatureFile != undefined;
          break;
        case "Internally detached":
          ready = this.signedFiles.length == 1;
          break;
      }
    }
    return ready;
  }

  setOtherOptions(opts: OtherOptions) {
    this.other_opts = opts;
  }

  submit() {
    console.log('start submit');
    this.sentRequest = true;
    var valReqAssembler = new ValRequestAssembler(this.signatureFile!, this.signedFiles, this.other_opts.signedETSIReport, this.other_opts.certificateSource, this.other_opts.policy);
    valReqAssembler.assembleValRequest().then(validationRequest => {
      console.log(JSON.stringify(validationRequest));
      this.validationService.validate(validationRequest).then(validationResponse => {
        validationResponse.subscribe(valResponse => {
          this.validationResponse = valResponse;
          this.setEtsiValidationReport();
          this.setOtherReports();
        });
      });
    });
  }

  /**
   * Clears all file inputs
   */
  clearFileInputs(): void {
    this.signedFiles.length = 0
    this.signatureFile = undefined;
  }

  clearSignedFile(): void {
    this.signatureFile = undefined;
  }

  clearLastOriginalFile(): void {
    if (this.signedFiles.length > 0)
      this.signedFiles.pop();
  }

  setEtsiValidationReport() {
    this.etsiReport = this.responseHandlingService.etsiReport(this.validationResponse!);
  }

  setOtherReports() {
    return this.responseHandlingService.otherReports(this.validationResponse!).then(map => {
      map.get("SimpleReport.html")?.then(simpleReport => {
        this.simpleReport = simpleReport;
      });
      map.get("DetailedReport.html")?.then(detailedReport => {
        this.detailedReport = detailedReport;
      });
      map.get("DiagnosticData.xml")?.then(diagnosticData => {
        this.diagnosticData = diagnosticData;
      })
    });
  }

  clear() {
    this.validationResponse = null;
  }

  debug(event: any) {
    console.log(event); // https://stackoverflow.com/questions/44301560/angular-2-two-way-binding-with-disabled
  }
}


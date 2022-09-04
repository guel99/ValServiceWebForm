import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ValRequestAssembler } from 'src/app/model/utils/valReqAssembler';
import { ValidationRequest } from 'src/app/model/validationRequest';
import { ValidationService } from 'src/app/service/validation.service';
import { AdESRelPosition } from '../../model/enums/adESRelPosition';
import { AdESType } from '../../model/enums/adESType';

@Component({
  selector: 'app-validation-request',
  templateUrl: './validation-request.component.html',
  styleUrls: ['./validation-request.component.css']
})
export class ValidationRequestComponent implements OnInit {

  readonly asic:AdESType = AdESType.ASiC;
  readonly cades:AdESType = AdESType.CAdES;
  readonly jades:AdESType = AdESType.JAdES;
  readonly pades:AdESType = AdESType.PAdES;
  readonly xades:AdESType = AdESType.XAdES;

  readonly enveloped:AdESRelPosition = AdESRelPosition.ENVELOPED;
  readonly enveloping:AdESRelPosition = AdESRelPosition.ENVELOPING;
  readonly detached:AdESRelPosition = AdESRelPosition.DATACHED;
  readonly internally_detached:AdESRelPosition = AdESRelPosition.INTERNALLY_DETACHED;

  /**
   * The type of AdES signature 
   * selected
   */
  selected?:AdESType;

  /**
   * The singature relative position 
   * to signed data
   */
  relativePosition?:AdESRelPosition;

  /**
   * Original files uploaded by the client
   */
  originalFiles:Array<File>;

  signedFile?: File;

  constructor(private http: HttpClient, private validationService: ValidationService) { }

  ngOnInit(): void {
    this.selected = undefined;
    this.relativePosition = undefined;
    this.originalFiles = new Array<File>();
    this.signedFile = undefined;
  }

  selectAdESType(type:AdESType){
    this.selected = type;
    this.relativePosition = undefined;
  }

  selectRelPosition(type:AdESRelPosition){
    this.relativePosition = type;
  }

  uncheckAllRelativePosOpts() : void {
    var list = document.getElementsByName("relPosType");
    list.forEach(elem => (elem as HTMLInputElement).checked = false);
  }

  getOriginalFileNames(): Array<string> {
    var ret = new Array<string>();
    for(const file of this.originalFiles){
      ret.push(file.name);
    }
    return ret;
  }

  /**
   * Handles the selected original files event
   * @param event
   */
  onOriginalFilesSelected(event:Event) {
    var selected = (event.target as HTMLInputElement).files;
    var size = selected != undefined ? selected?.length : 0;
    for(var i = 0; i<size; i++){
      if(selected?.item(i) != undefined){
        var file = selected?.item(i) as File;
        this.originalFiles.push(file);
      }
    }
  }
  
  /**
   * Handles the selected signed file event
   * @param event 
   */
  onSignedFileSelected(event:Event) {
    var selected = (event.target as HTMLInputElement).files;
    if(selected?.item(0) != undefined){
      this.signedFile = selected?.item(0) as File;
    }
  }

  /**
   * Tells when the form is ready to sumbit 
   * the validation request to the back-office
   * @returns 
   */
  readyToSubmit(): boolean {
    return this.signedFile != undefined &&
        this.selected != undefined &&
            (this.selected != this.asic ? this.relativePosition != undefined : true) &&
            (this.relativePosition == this.detached ? this.originalFiles.length>0:true);
  }

  async submit(): Promise<void> {
    var valReqAssembler = new ValRequestAssembler(this.signedFile!, this.originalFiles);
    var validationRequest = <ValidationRequest>await valReqAssembler.assembleValRequest();
    this.validationService.validate(validationRequest);
  }

  /**
   * Clears all file inputs
   */
  clearFileInputs() : void {
    this.originalFiles.length = 0
    this.signedFile = undefined;
  }

  clearSignedFile() : void {
    this.signedFile = undefined;
  }

  clearLastOriginalFile() : void {
    if(this.originalFiles.length>0)
      this.originalFiles.pop();
  }
}


import { Component, OnInit } from '@angular/core';
import { SignatureConstraints } from 'src/app/configs/constraints-types/signature-constraints';

@Component({
  selector: 'app-signature-constraints',
  templateUrl: './signature-constraints.component.html',
  styleUrls: ['./signature-constraints.component.css']
})
export class SignatureConstraintsComponent implements OnInit {

  /**
   * The configured signature constraints
   */
  signatureConstraintsConfig: SignatureConstraints = new SignatureConstraints();

  constructor() { }

  ngOnInit(): void {
  }

}
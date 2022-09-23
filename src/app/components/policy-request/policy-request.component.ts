import { Component, OnInit } from '@angular/core';
import { ConstraintsConfiguration } from 'src/app/configs/constraints-config';
import { ContainerConstraints } from 'src/app/configs/constraints-types/container-constraints';

@Component({
  selector: 'app-policy-request',
  templateUrl: './policy-request.component.html',
  styleUrls: ['./policy-request.component.css']
})
export class PolicyRequestComponent implements OnInit {

  /**
   * The containerConstraints
   */
  containerConst: ContainerConstraints = ConstraintsConfiguration.container;

  constructor() { }

  ngOnInit(): void {
  }

}

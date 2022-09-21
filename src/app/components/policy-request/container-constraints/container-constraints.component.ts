import { Component, OnInit } from '@angular/core';
import { type } from 'os';
import { ConstraintType } from 'src/app/model/enums/policy/constraint-types';

@Component({
  selector: 'app-container-constraints',
  templateUrl: './container-constraints.component.html',
  styleUrls: ['./container-constraints.component.css']
})
export class ContainerConstraintsComponent implements OnInit {

  constraints = [
    { 
      ruleName: 'AcceptableContainerTypes', 
      pattern: '^ASiC-S|ASiC-E$',
      type: ConstraintType.MULTI_VALUES_CONSTRAINT
    },
    {
      ruleName: 'ZipCommentPresent',
      type: ConstraintType.LEVEL_CONSTRAINT
    },
    {
      ruleName: 'AcceptableZipComment',
      type: ConstraintType.MULTI_VALUES_CONSTRAINT
    },
    {
      ruleName: 'MimeTypeFilePresent',
      type: ConstraintType.LEVEL_CONSTRAINT
    },
    {
      ruleName: 'AcceptableMimeTypeFileContent',
      pattern: '^[-\\w.]+/[\\+-\\w.]+$',
      type: ConstraintType.MULTI_VALUES_CONSTRAINT
    },
    {
      ruleName: 'ManifestFilePresent',
      type: ConstraintType.LEVEL_CONSTRAINT
    },
    {
      ruleName: 'SignedFilesPresent',
      type: ConstraintType.LEVEL_CONSTRAINT
    },
    {
      ruleName: 'AllFilesSigned',
      type: ConstraintType.LEVEL_CONSTRAINT
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  isLevelConstraint(constraint: any) : boolean {
    return constraint.type == ConstraintType.LEVEL_CONSTRAINT;
  }

  isMultiValuesConstraint(constraint: any) : boolean {
    return constraint.type == ConstraintType.MULTI_VALUES_CONSTRAINT;
  }

}

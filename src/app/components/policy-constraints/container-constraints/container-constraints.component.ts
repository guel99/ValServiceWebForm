import { Component, OnInit } from '@angular/core';
import { ConstraintDTO } from 'src/app/model/dto/constraint-dto';
import { ContainerConstraintsDTO } from 'src/app/model/dto/container-constraints-dto';
import { MultiValuesConstraintDTO } from 'src/app/model/dto/multi-values-constraint-dto';
import { ConstraintsComponent } from '../../policy-request/constraints/constraints.component';

@Component({
  selector: 'app-container-constraints',
  templateUrl: './container-constraints.component.html',
  styleUrls: ['./container-constraints.component.css']
})
export class ContainerConstraintsComponent extends ConstraintsComponent implements OnInit {

  constructor() {
    super();
  }

  private buildDTO() : ContainerConstraintsDTO {
    var containerConstraintsDTO: ContainerConstraintsDTO = new ContainerConstraintsDTO();
    containerConstraintsDTO.AcceptableContainerTypes = this.enabledConstraints.get('AcceptableContainerTypes') as MultiValuesConstraintDTO;
    containerConstraintsDTO.ZipCommentPresent = this.enabledConstraints.get('ZipCommentPresent') as string;
    containerConstraintsDTO.AcceptableZipComment = this.enabledConstraints.get('AcceptableZipComment') as MultiValuesConstraintDTO;
    containerConstraintsDTO.MimeTypeFilePresent = this.enabledConstraints.get('MimeTypeFilePresent') as string;
    containerConstraintsDTO.AcceptableMimeTypeFileContent = this.enabledConstraints.get('AcceptableMimeTypeFileContent') as MultiValuesConstraintDTO;
    containerConstraintsDTO.ManifestFilePresent = this.enabledConstraints.get('ManifestFilePresent') as string;
    containerConstraintsDTO.SignedFilesPresent = this.enabledConstraints.get('SignedFilesPresent') as string;
    containerConstraintsDTO.AllFilesSigned = this.enabledConstraints.get('AllFilesSigned') as string;
    return containerConstraintsDTO;
  }
}

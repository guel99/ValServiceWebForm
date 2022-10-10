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

  createDTO(dic: Map<string, any>) {
    var containerConstraintsDTO: ContainerConstraintsDTO = new ContainerConstraintsDTO();
    containerConstraintsDTO.AcceptableContainerTypes = dic.get('AcceptableContainerTypes') as MultiValuesConstraintDTO;
    containerConstraintsDTO.ZipCommentPresent = dic.get('ZipCommentPresent') as string;
    containerConstraintsDTO.AcceptableZipComment = dic.get('AcceptableZipComment') as MultiValuesConstraintDTO;
    containerConstraintsDTO.MimeTypeFilePresent = dic.get('MimeTypeFilePresent') as string;
    containerConstraintsDTO.AcceptableMimeTypeFileContent = dic.get('AcceptableMimeTypeFileContent') as MultiValuesConstraintDTO;
    containerConstraintsDTO.ManifestFilePresent = dic.get('ManifestFilePresent') as string;
    containerConstraintsDTO.SignedFilesPresent = dic.get('SignedFilesPresent') as string;
    containerConstraintsDTO.AllFilesSigned = dic.get('AllFilesSigned') as string;
    this.changedConstraintSet.emit(containerConstraintsDTO);
  }
}

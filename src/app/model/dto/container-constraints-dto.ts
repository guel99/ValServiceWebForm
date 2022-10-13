import { ConstraintDTO } from "./constraint-dto";
import { MultiValuesConstraintDTO } from "./multi-values-constraint-dto"

export class ContainerConstraintsDTO extends ConstraintDTO {

        acceptableContainerTypes: MultiValuesConstraintDTO;
        zipCommentPresent: string;
        acceptableZipComment: MultiValuesConstraintDTO;
        mimeTypeFilePresent: string;
        acceptableMimeTypeFileContent: MultiValuesConstraintDTO;
        manifestFilePresent: string;
        signedFilesPresent: string;
        allFilesSigned: string;

        override populate(dic: Map<string, any>) {
                this.acceptableContainerTypes = dic.get('AcceptableContainerTypes') as MultiValuesConstraintDTO;
                this.zipCommentPresent = dic.get('ZipCommentPresent') as string;
                this.acceptableZipComment = dic.get('AcceptableZipComment') as MultiValuesConstraintDTO;
                this.mimeTypeFilePresent = dic.get('MimeTypeFilePresent') as string;
                this.acceptableMimeTypeFileContent = dic.get('AcceptableMimeTypeFileContent') as MultiValuesConstraintDTO;
                this.manifestFilePresent = dic.get('ManifestFilePresent') as string;
                this.signedFilesPresent = dic.get('SignedFilesPresent') as string;
                this.allFilesSigned = dic.get('AllFilesSigned') as string
        }
}
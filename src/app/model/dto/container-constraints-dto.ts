import { MultiValuesConstraintDTO } from "./multi-values-constraint-dto"

export class ContainerConstraintsDTO {

        AcceptableContainerTypes: MultiValuesConstraintDTO;
        ZipCommentPresent:string;
        AcceptableZipComment: MultiValuesConstraintDTO;
        MimeTypeFilePresent: string;
        AcceptableMimeTypeFileContent: MultiValuesConstraintDTO;
        ManifestFilePresent: string;
        SignedFilesPresent: string;
        AllFilesSigned: string;
}
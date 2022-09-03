import { DocumentHashType } from "./documentHashType"
import { InDocsDocType } from "./documentType"
import { TransformedDataType } from "./transformedDataType"

export class InputDocuments{
    doc?:Array<InDocsDocType>
    transformed?:Array<TransformedDataType>
    docHash?:Array<DocumentHashType>
}
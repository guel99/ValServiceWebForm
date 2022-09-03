import { DigestInfoType } from "./digestInfoType";
import { InDocsDocType } from "./documentType";
import { TransformsType } from "./transformsType";

export class DocumentHashType{
    id?:string;
    refURI?:string;
    refType?:string;
    schemaRefs?:Array<InDocsDocType>;
    transforms?:TransformsType;
    di:Array<DigestInfoType>;
    whichRef?:number;
    pAdESSFieldName?:string;
}
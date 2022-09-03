import { Base64DataType } from "./base64DataType";

export class InDocsDocType{
    id?:string;
    refURI?:string;
    refType?:string;
    schemaRefs?:Array<InDocsDocType>;
    b64Data:Base64DataType;
}
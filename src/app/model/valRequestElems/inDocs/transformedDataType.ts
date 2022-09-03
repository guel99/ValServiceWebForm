import { Base64DataType } from "./base64DataType";
import { TransformsType } from "./transformsType";

export class TransformedDataType{
    id?:string;
    refURI?:string;
    refType?:string;
    schemaRefs?:Array<string>;
    transforms?:TransformsType;
    b64Data:Base64DataType;
    whichRef?:number;
}
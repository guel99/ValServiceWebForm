import { NsPrefixMappingType } from "./nsPrefixMappingType";

export class TransformType{
    xPath?:Array<string>;
    val?:string;
    b64Content?:string;
    ncDecl?:Array<NsPrefixMappingType>;
    alg?:string;
}
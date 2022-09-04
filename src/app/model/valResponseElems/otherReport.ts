import { Base64DataType } from "../valRequestElems/inDocs/base64DataType";

export class OtherReport{

    content?: Base64DataType;

    /**
     * Shall be an URI identifying the specification 
     * where the validation report
     */
    specId?: string;

    /**
     * Shall indicate the encoding used for the validation report
     */
    encoding?: string;
}
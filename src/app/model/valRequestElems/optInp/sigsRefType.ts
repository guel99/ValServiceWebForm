import { DigRefsType } from "./digRefsType";
import { XAdESSignaturePtrType } from "./xadesSignaturePtrType";

/**
 * Request message's mechanism for allowing the client to
 * enumerate to the server the signatures that the client requests to process
 */
export class SigsRefType{

    /**
     * Shall be the base-64 encoded value of the digest of the referenced digital
     * signature computed using the digest algorithm identified in DigestMethod
     */
    digRefs:DigRefsType;

    /**
     * The value of each item within the pAdESFieldNames array shall
     * be the name of the PDF field where the referenced
     * PAdES signature is present within the PDF signed document
     */
    padesFielsNames?:Array<string>;
    
    xadesSigPtrs?:Array<XAdESSignaturePtrType>;
}
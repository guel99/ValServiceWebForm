import { X509DigestType } from "./x509DigestType";

/**
 * The AdditionalKeyInfo component provides the server with additional data (such as certificates and
 * CRLs) which it can use to validate the signature
 */
export class AdditionalKeyInfoType{

    x509Digest?:X509DigestType;

    /**
     * The optional X509SubjectName element MUST
     * contain one instance of a string
     */
    sub?:string;

    /**
     * The optional X509SKI element MUST contain one
     * instance of base64 encoded binary
     * data
     */
    ski?:string;

    /**
     * The optional X509Certificate element MUST
     * contain one instance of base64 encoded
     * binary data
     */
    cert?:string;

    /**
     * The optional KeyName element MUST contain one instance of a string
     */
    name?:string;

    /**
     * The optional X509CRL element MUST contain one instance of base64 encoded binary
     * data
     */
    crl?:Array<number>;
}
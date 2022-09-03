import { Base64DataType } from "../inDocs/base64DataType";
import { DocumentBaseType } from "../optInp/documentBaseType";
import { SignaturePtrType } from "./signaturePtrType";

/**
 * Component that contains a signature or timestamp of some sort
 */
export class SignatureObject{

    /**
     * A base64 encoding of some arbitrary signature,
     * such as an XML signature [XMLDSIG], PGP [RFC 2440] or CMS [RFC 5652] signature or a
     * RFC 3161 timestamp [RFC 3161]. The type of signature is specified by the MimeType element
     * of the Base64DataType component
     */
    b64Sig?:Base64DataType;

    /**
     * This element is used to point to an XML signature in
     * an input (for a verify request) or output (for a sign response) document in which a signature is
     * enveloped.
     */
    sigPtr?:SignaturePtrType;

    /**
     * The identified schemas are to be used to process the Id attributes
     * during parsing and for XPath evaluation
     */
    schemaRefs?:Array<DocumentBaseType>;
}
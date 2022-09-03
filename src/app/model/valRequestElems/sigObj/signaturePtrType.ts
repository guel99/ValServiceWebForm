import { NsPrefixMappingType } from "../inDocs/nsPrefixMappingType";
import { DocumentBaseType } from "../optInp/documentBaseType";

export class SignaturePtrType{

    /**
     * This
     * element identifies the signature element being pointed at within the selected document. The
     * XPath expression is evaluated from the root node (see section 5.1 of [XPATH]) of the document
     * identified by WhichDocument
     */
    xPath?:string;

    /**
     * Defines the mapping of namespace URIs to namespace prefixes.
     * This is required to evaluate XPath expression when using transport syntaxes that don’t support
     * namespace.
     */
    nsDecl?:Array<NsPrefixMappingType>;

    /**
     * This element identifies the input document being pointed at.
     */
    whichDoc:DocumentBaseType;
}
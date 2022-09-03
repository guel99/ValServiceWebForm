import { InDocsDocType } from "../inDocs/documentType";

export class DocumentBaseType{
    
    /**
     * This identifier gives the input document a unique label within a particular request message.
     * Through this identifier, an optional input can refer to a single input document. Using this
     * identifier and the IdRef element it is possible to avoid redundant content
     */
     id?:string;

     /**
      * This
      * specifies the value for a <ds:Reference> element’s URI attribute when referring to this input
      * document. The RefURI element SHOULD be specified
      */
     refURI?:string;
 
     /**
      * This
      * specifies the value for a <ds:Reference> element’s Type attribute when referring to this input
      * document
      */
     refType?:string;
 
     /**
      * The identified schemas are to be used to process the Id attributes
      * during parsing and for XPath evaluation.
      */
     schemaRefs?:Array<InDocsDocType>;
}
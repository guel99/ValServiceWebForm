import { InternationalStringType } from "./internationStringType";

export class Result{
    
    /**
     * The ResultMajor element describes the most significant component of the result code. The
     * set values MAY be extended
     */
    maj:string;

    /**
     * The optional ResultMinor element MUST contain a URI
     */
    min?:string;

    /**
     * It represents a message which MAY be returned to an operator, logged
     * by the client, used for debugging, etc
     */
    msg?:InternationalStringType;

    /**
     * In the
     * case of processing problems, the server MAY give a reference to processing details (e.g. for
     * debugging purposes) but does not want to disclose sensitive information, this element can be
     * used. It MAY contain a random string that links the current request to internal logs, processing
     * protocols or crash dumps
     */
    pRef?:string;
}
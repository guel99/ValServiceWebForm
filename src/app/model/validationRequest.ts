import { InputDocuments } from "./valRequestElems/inDocs/inputDocuments";
import { OptionalInputs } from "./valRequestElems/optInp/optionalInputs";
import { SignatureObject } from "./valRequestElems/sigObj/signatureObject";

export class ValidationRequest{

    /**
     * MAY occur zero or more times containing a URI. This
     * element lists the set of DSS profile applied by the server. This set MAY include the set of
     * profiles requested by the client. But the server MAY use more comprehensive set of profiles and
     * add additional profiles not requested by the client
     */
    profile?:Array<string>;

    /**
     * The RequestID element is used to correlate
     * this response with its request.
     */
    reqID?:string;

    /**
     * Stores the signed documents, or its
     * representation, to validate its signatures
     */
    inDocs?:InputDocuments;
    optInp?:OptionalInputs;

    /**
     * The SignatureObject element contains a signature or timestamp, or else
     * contains a <SignaturePtr> that points to an XML signature in one
     * of the input documents
     */
    sigObj?:SignatureObject;

    /**
     * Other atached inputs that complements the request. In our 
     * case, this is used to send to the server a local validation policy
     */
    attachment: any;
}
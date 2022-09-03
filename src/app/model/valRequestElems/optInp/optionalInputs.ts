import { AdditionalKeyInfoType } from "./additionalKeyInfoType";
import { ClaimedIdentityType } from "./claimedIdentityType";
import { ProofsOfExistenceType } from "./proofsOfExistenceType";
import { ReturnTransformedDocumentType } from "./returnTransformedDocumentType";
import { ReturnValReportType } from "./returnValReportType";
import { SchemasType } from "./schemasType";
import { SigsRefType } from "./sigsRefType";
import { SigValPolicyType } from "./sigValPolicyType";
import { UseVerificationTimeType } from "./useVerificationTimeType";

export class OptionalInputs{

    policy?:Array<string>;

    lang?:string;
    
    claimedIdentity?:ClaimedIdentityType;

    schemas?:SchemasType;

    /**
     * Instructs the server to attempt to determine the
     * signature’s validity at the specified time, instead
     * of a time determined by the server policy
     */
    useVerificationTime?:UseVerificationTimeType;

    /**
     * This element cam be used by the client to obtain the time
     * instant used by the server to validate the signature
     */
    returnVerificationTime?:boolean = false;

    /**
     * This element provides the server with additional
     * data (such as certificates and CRLs) which it can use
     * to validate the signature
     */
    addKeyInfo?:Array<AdditionalKeyInfoType>;

    /**
     * This element allows the client to instruct the server to return the time
     * instant associated to the signature creation as a SigningTimeInfo element
     */
    returnSigningTime?:boolean = false;

    returnSigner?:boolean = false;

    /**
     * The
     * ReturnTransformedDocument element instructs the server to return an input document to which
     * the XML signature transforms specified by a particular <ds:Reference> have been applied. The
     * result of the transformations will be returned as a TransformedDocument element
     */
    returnTransformed?:ReturnTransformedDocumentType;

    verifyManifests?:boolean = false;

    processSigs?:SigsRefType;

    /**
     * The element that shall request the server to validate the signature(s)
     * against a certain signature validation policy shall be
     * the useSigValPol element
     */
    useSigValPol?:SigValPolicyType;

    returnValReport?:ReturnValReportType;

    proofsOfExists?:ProofsOfExistenceType;
}
import { NameIDType } from "../valRequestElems/optInp/nameIDType";
import { ResultsForOneSignatureType } from "./resultsForOneSignatureType";
import { SigningTimeInfoType } from "./signingTimeInfoType";
import { TransformedDocumentType } from "./transformedDocumentType";
import { ValReportContainerType } from "./valReportContainerType";
import { VerificationTimeInfoType } from "./verificationTimeInfoType";
import { VerifyManifestResultsType } from "./verifyManifestResultsType";

/**
 * The OptionalOutputsVerify component defines a set of additional outputs associated with the
 * processing of a verification request
 */
export class OptionalOutputsVerify{

    /**
     * MAY occur zero or more times containing a URI. This
     * element lists the set of DSS policies used by the server
     */
    policy?:Array<string>;

    /**
     * The TransformedDocument component contains a document corresponding to the specified
     * <ds:Reference>, after all the transforms in the reference have been applied
     */
    transformed?: TransformedDocumentType;

    /**
     * The results of verifying individual <ds:Reference>'s within a <ds:Manifest> are returned in the
     * VerifyManifestResults component
     */
    result?:VerifyManifestResultsType;

    /**
     * The SigningTimeInfo element returns the signature’s creation date and
     * time. When there is no way for the server to determine the signing time, the server MUST omit
     * this element
     */
    signingTimeInfo?: SigningTimeInfoType;

    /**
     * In addition to the verification time, the server MAY include in the
     * VerificationTimeInfo element any other relevant time instants that may have been used when
     * determining the verification time or that may be useful for its qualification.
     */
    verificationTimeInfo?: VerificationTimeInfoType;

    /**
     * The SignerIdentity element contains an indication of who
     * performed the signature
     */
    signerIdentity?: NameIDType;

    validationReport?: ValReportContainerType;

    resForEachSignature?: Array<ResultsForOneSignatureType>;

    appliedSigValPolicy?: string;

    availableSigValPols?: Array<string>;
}
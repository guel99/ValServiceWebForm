import { NameIDType } from "../valRequestElems/optInp/nameIDType";
import { SigsRefType } from "../valRequestElems/optInp/sigsRefType";
import { Result } from "./result";
import { SigningTimeInfoType } from "./signingTimeInfoType";
import { TransformedDocumentType } from "./transformedDocumentType";
import { ValReportContainerType } from "./valReportContainerType";
import { VerifyManifestResultsType } from "./verifyManifestResultsType";

export class ResultsForOneSignatureType{

    result: Result;

    sigRef?: SigsRefType;

    signerIdentity?: NameIDType;

    signingInfoType?: SigningTimeInfoType;

    validationReport?: ValReportContainerType;

    manifestValResults?: VerifyManifestResultsType;

    transformed?: TransformedDocumentType;
}
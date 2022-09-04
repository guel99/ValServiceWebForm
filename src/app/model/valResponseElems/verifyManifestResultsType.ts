import { ManifestResultType } from "./manifestResultType";

/**
 * The results of verifying individual <ds:Reference>'s
 * within a <ds:Manifest> are returned in the
 * VerifyManifestResults component
 */
export class VerifyManifestResultsType{

    signedRef:Array<ManifestResultType>;
}
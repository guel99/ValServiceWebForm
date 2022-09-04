import { AdditionalTimeInfoType } from "./additionalTimeInfoType";

/**
 * This component allows the client to obtain the time instant used by the server
 * to validate the signature
 */
export class VerificationTimeInfoType{

    /**
     * This time instant used by the server when verifying the signature. It SHOULD be
     * expressed as UTC time (Coordinated Universal Time) to reduce confusion with the local time
     * zone use
     */
    verificationTime: number;

    /**
     * The AdditionalTimeInfo element can contain any
     * other time instant(s) relevant in the context
     * of the verification time determination
     */
    additionalTimeInfo?: Array<AdditionalTimeInfoType>;
}
import { SigningTimeBoundaries } from "./signingTimeBoundaries";

/**
 * Allows the client to obtain the time instant associated to the
 * signature creation
 */
export class SigningTimeInfoType{

    /**
     * This element returns the time value considered
     * by the server to be the signature creation
     * time
     */
    signingTime: number;

    /**
     * This element returns the trusted time values
     * considered as lower and upper limits for
     * the signing time
     */
    signingTimeBounds?: SigningTimeBoundaries;
}
/**
 * This element returns the trusted time values
 * considered as lower and upper limits for
 * the signing time
 */
export class SigningTimeBoundaries{

    /**
     * MUST contain a date/time value
     */
    lowerBound?: number;

    /**
     * MUST contain a date/time value
     */
    upperBound?: number;
}
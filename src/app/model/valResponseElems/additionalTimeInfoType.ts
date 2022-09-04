export class AdditionalTimeInfoType{

    /**
     * MUST contain one instance of a date/time value
     */
    value?: number;

    /**
     * The Type attribute qualifies the kind of time
     * information included in the response
     */
    type: string;

    /**
     * It allows to establish references to the source of the time information and SHOULD be used when there
     * is a need to disambiguate several AdditionalTimeInfo components with the same Type attribute
     */
    ref?: string;
}
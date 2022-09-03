/**
 * This component provide means for requesting to the server the generation and return of a detailed validation report
 * for each validated signature
 */
export class ReturnValReportType{

    /**
     * Shall be an URI identifying the validation
     * report that the client is requesting
     */
    asSpecifiedBy?:string;

    /**
     * A "true" value of the component signIt shall indicate that the client is requesting that the server signs the validation
     * report. A "false" value or absence of this component shall indicate that the client is not requesting that the server signs
     * the validation report
     */
    signIt?:boolean = false;
}
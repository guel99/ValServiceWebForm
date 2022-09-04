import { OtherReport } from "./otherReport";

/**
 * This value of this element is the base-64 encoding of a signed or unsigned
 * etsivr:ValidationReport XML element as specified in the XML Schema of ETSI TS 119 102-2
 */
export class ValReportContainerType{

    /**
     * Shall contain the base-64 encoding of an instance of the XML validation report
     * specified in ETSI TS 119 102-2
     */
    etsiTS11910202XMLReport?:string;

    /**
     * Container for validation reports different than the XML validation report specified in ETSI
     * TS 119 102-2
     */
    other?: OtherReport;

    /**
     * Shall indicate whether the validation report is signed or not
     */
    isSigned?:boolean;
}
import { BasicSignatureConstraintsDTO } from "./basic-signature-constraints-dto";
import { ConstraintDTO } from "./constraint-dto";

export class RevocationConstraintsDTO extends ConstraintDTO {

    /**
     * hecks the returned status is not unknown
     */
     unknownStatus: String;
 
     /**
      * Checks if an OCSP response has certHash attribute
      */
     ocspCertHashPresent: String;
 
     /**
      * Checks if a value of certHash attribute matches
      * the signing certificate
      */
     ocspCertHashMatch: String;
 
     /**
      * Checks if a checked certificate appears in the
      * OCSP Responder's certificate path
      */
     selfIssuedOCSP: String;
 
     /**
      * Group of common checks on this token signature
      */
     basicSignatureConstraints: BasicSignatureConstraintsDTO;
 
 
     level: String;

     override populate(dic: Map<string, any>): void {
         
     }
}
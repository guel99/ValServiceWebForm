import { BasicSignatureConstraintsDTO } from "./basic-signature-constraints-dto";

export class RevocationConstraintsDTO {

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
}
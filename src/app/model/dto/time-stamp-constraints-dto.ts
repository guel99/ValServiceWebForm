import { BasicSignatureConstraintsDTO } from "./basic-signature-constraints-dto";
import { ConstraintDTO } from "./constraint-dto";
import { SignedAttributesConstraintsDTO } from "./signed-attributes-constraints-dto";
import { TimeConstraintDTO } from "./time-constraint-dto";

export class TimeStampConstraintsDTO extends ConstraintDTO{
    /**
     * Checks the delay between the best-signature-time
     * and the claimed signing time
     */
     timestampDelay: TimeConstraintDTO;

     /**
      * Checks if the revocation date is after the best-signature-time
      */
     revocationTimeAgainstBestSignatureTime: String;
 
     /**
      * Checks if the best-signature-time is before the expiration of the signing certificate
      */
     bestSignatureTimeBeforeExpirationDateOfSigningCertificate: String;
 
     /**
      * Checks the timestamps ordering (archival timestamp is not before a content-timestamp,...)
      */
     coherence: String;
 
     /**
      * Checks if a TSTInfo.tsa field is present for a timestamp
      */
     tsaGeneralNamePresent: String;
 
     /**
      * Checks if a TSTInfo.tsa field's value matches the timestamp's
      * issuer distinguishing name when present
      */
     tsaGeneralNameContentMatch: String;
 
     /**
      * Checks if a TSTInfo.tsa field's value and order matches the
      * timestamp's issuer distinguishing name when present
      */
     tsaGeneralNameOrderMatch: String;
 
     /**
      * Group of common checks on this token signature
      */
     basicSignatureConstraints: BasicSignatureConstraintsDTO;
 
     /**
      * Group of checks on the signed attributes/properties
      */
     signedAttributesConstraints: SignedAttributesConstraintsDTO;

     override populate(dic: Map<string, any>): void {
        this.timestampDelay = dic.get('TimestampDelay') as TimeConstraintDTO;
        this.revocationTimeAgainstBestSignatureTime = dic.get('RevocationTimeAgainstBestSignatureTime') as String;
        this.bestSignatureTimeBeforeExpirationDateOfSigningCertificate = dic.get('BestSignatureTimeBeforeExpirationDateOfSigningCertificate') as String;
        this.coherence = dic.get('Coherence') as String;
        this.tsaGeneralNamePresent = dic.get('TsaGeneralNamePresent') as String;
        this.tsaGeneralNameContentMatch = dic.get('TsaGeneralNameContentMatch') as String;
        this.tsaGeneralNameOrderMatch = dic.get('TsaGeneralNameOrderMatch') as String;

        this.basicSignatureConstraints = new BasicSignatureConstraintsDTO();
        this.basicSignatureConstraints.populate(dic.get('BasicSignatureConstraints'));

        this.signedAttributesConstraints = new SignedAttributesConstraintsDTO();
        this.signedAttributesConstraints.populate(dic.get('SignedAttributesConstraints'));
     }
}
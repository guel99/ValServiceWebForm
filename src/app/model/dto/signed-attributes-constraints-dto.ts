import { ConstraintDTO } from "./constraint-dto";
import { MultiValuesConstraintDTO } from "./multi-values-constraint-dto";
import { ValueConstraintDTO } from "./value-constraint-dto";

export class SignedAttributesConstraintsDTO extends ConstraintDTO {

    /**
     * Checks the presence of the signingCertificate (V1/V2) attribute
     */
     
     signingCertificatePresent: string;
 
     /**
      * Checks the unicity of the signingCertificate (V1/V2) attribute
      * (if the signingCertificate reference unique)
      */
     
     unicitySigningCertificate: string;
 
     /**
      * Checks is the signingCertificate (V1/V2) attribute covers only
      * those which are present in the certificate chain
      */
     
     signingCertificateRefersCertificateChain: string;
 
     /**
      * hecks if all certificates in the chain are referenced by the
      * signingCertificate (V1/V2) attribute, when present
      */
     
     referencesToAllCertificateChainPresent: string;
 
     /**
      * Verifies a validity against cryptographic constraints for a DigestAlgorithm
      * used on a signing-certificate-reference creation, when present
      */
     
     signingCertificateDigestAlgorithm: string;
 
     /**
      * Checks the presence of the signing certificate digest
      */
     
     certDigestPresent: string;
 
     /**
      * Checks if any signing certificate digest match with
      * the found signer
      */
     
     certDigestMatch: string;
 
     /**
      * Checks if the serial number of the issuer certificate
      * present within a signing-certificate reference matches
      */
     
     issuerSerialMatch: string;
 
     /**
      * Checks if 'kid' (key identifier) header parameter is
      * present within a protected header of the signature (JAdES only)
      */
     
     keyIdentifierPresent: string;
 
     /**
      * Checks if the value of 'kid' (key identifier) header parameter
      * matches the signing-certificate (JAdES only)
      */
     
     keyIdentifierMatch: string;
 
     /**
      * Checks the presence of the signing-time attribute
      */
     
     signingTime: string;
 
     /**
      * Checks if the content-type attribute has the expected value
      */
     contentType: ValueConstraintDTO;
 
     /**
      * Checks if the content-hints attribute (CAdES) has the expected value
      */
     contentHints: ValueConstraintDTO;
 
     /**
      * Checks if the content-identifier attribute (CAdES) has the expected valu
      */
     contentIdentifier: ValueConstraintDTO;
 
     /**
      * Checks the presence of message-digest attribute (CAdES) or
      * SignedProperties (XAdES)
      */
     
     messageDigestOrSignedPropertiesPresent: string;
 
     /**
      * Verifies whether the size of the elliptic curve key used to create
      * the signature corresponds to the defined signature algorithm (see RFC 7518)
      */
     //
     //ellipticCurveKeySize: string;
 
     /**
      * Checks if CommitmentTypeIndication is in the acceptable values list
      */
     
     commitmentTypeIndication: MultiValuesConstraintDTO;
 
     /**
      * Checks the presence of the production/localization attribute
      */
     
     signerLocation: string;
 
     /**
      * Checks if claimed role is in the acceptable values list
      */
     
     claimedRoles: MultiValuesConstraintDTO;
 
     /**
      * Checks if certified role is in the acceptable values list
      */
     
     certifiedRoles: MultiValuesConstraintDTO;
 
     /**
      * Checks the presence of a content-timestamp attribute
      */
     
     contentTimeStamp: string;
 
     /**
      * Checks the message imprint validity for present content-timestamps
      */
     
     contentTimeStampMessageImprint: string;

     override populate(dic: Map<string, any>): void {
        this.signingCertificatePresent = dic.get('SigningCertificatePresent') as string;
        this.unicitySigningCertificate = dic.get('UnicitySigningCertificate') as string;
        this.signingCertificateRefersCertificateChain = dic.get('SigningCertificateRefersCertificateChain') as string;
        this.referencesToAllCertificateChainPresent = dic.get('ReferencesToAllCertificateChainPresent') as string;
        this.signingCertificateDigestAlgorithm = dic.get('SigningCertificateDigestAlgorithm') as string;
        this.certDigestPresent = dic.get('CertDigestPresent') as string;
        this.certDigestMatch = dic.get('CertDigestMatch') as string;
        this.issuerSerialMatch = dic.get('IssuerSerialMatch') as string;
        this.keyIdentifierPresent = dic.get('KeyIdentifierPresent') as string;
        this.keyIdentifierMatch = dic.get('KeyIdentifierMatch') as string;
        this.signingTime = dic.get('SigningTime') as string;
        this.contentType = dic.get('ContentType') as ValueConstraintDTO;
        this.contentHints = dic.get('ContentHints') as ValueConstraintDTO;
        this.contentIdentifier = dic.get('ContentIdentifier') as ValueConstraintDTO;
        this.messageDigestOrSignedPropertiesPresent = dic.get('MessageDigestOrSignedPropertiesPresent') as string;
        this.commitmentTypeIndication = dic.get('CommitmentTypeIndication') as MultiValuesConstraintDTO;
        this.signerLocation = dic.get('SignerLocation') as string;
        this.claimedRoles = dic.get('ClaimedRoles') as MultiValuesConstraintDTO;
        this.certifiedRoles = dic.get('CertifiedRoles') as MultiValuesConstraintDTO;
        this.contentTimeStamp = dic.get('ContentTimeStamp') as string;
        this.contentTimeStampMessageImprint = dic.get('ContentTimeStampMessageImprint') as string;
     }
}
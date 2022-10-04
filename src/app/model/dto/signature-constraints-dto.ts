import { BasicSignatureConstraintsDTO } from "./basic-signature-constraints-dto";
import { MultiValuesConstraintDTO } from "./multi-values-constraint-dto";
import { SignedAttributesConstraintsDTO } from "./signed-attributes-constraints-dto";
import { UnsignedAttributesConstraintsDTO } from "./unsigned-attributes-constraints-dto";

export class SignatureConstraintsDTO {

    /**
     * Checks the structural content (mainly XAdES against its XML Schema)
     */
     structuralValidation: String;
 
     /**
      * Checks if used signature policy is in the
      * acceptable values list
      */
     acceptablePolicies: MultiValuesConstraintDTO;
 
     /**
      * Checks the availability of the signature policy (PDF resource,...)
      */
     policyAvailable: String;
 
     /**
      * Checks the presence of a SignaturePolicyStore as an
      * unsigned attribute, containing a policy content
      */
     signaturePolicyStorePresent: String;
 
     /**
      * Checks the hash value for the given signature policy
      */
     policyHashMatch: String;
 
     /**
      * Checks if signature format (XAdES-BASELINE-B,...)
      * is in the acceptable values list
      */
     acceptableFormats: MultiValuesConstraintDTO;
 
     /**
      * Checks if the signature cover the complete document
      */
     fullScope: String;
 
     /**
      * Group of common checks
      */
     basicSignatureConstraints: BasicSignatureConstraintsDTO;
 
     /**
      * Group of checks on the signed attributes/properties
      */
     signedAttributesConstraints: SignedAttributesConstraintsDTO;
 
     /**
      * Group of checks on the unsigned attributes/properties
      */
     unsignedAttributesConstraints: UnsignedAttributesConstraintsDTO;
}
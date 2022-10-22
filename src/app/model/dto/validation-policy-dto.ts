import { ContainerConstraintsDTO } from "./container-constraints-dto";
import { CryptographicConstraintDTO } from "./cryptographic-constraint-dto";
import { EidasDTO } from "./eidas-dto";
import { ModelConstraintDTO } from "./model-constraint-dto";
import { RevocationConstraintsDTO } from "./revocation-constraints-dto";
import { SignatureConstraintsDTO } from "./signature-constraints-dto";
import { TimeStampConstraintsDTO } from "./time-stamp-constraints-dto";

export class ValidationPolicyDTO{

    /**
     * The validation policy description
     */
     description: String;
 
     /**
      * ASiC specific constraints
      */
     containerConstraints?: ContainerConstraintsDTO;
 
     /**
      * Constraints on the signature (signed/unsigned properties, coverage,...)
      */
     signatureConstraints?: SignatureConstraintsDTO;
 
     /**
      * Constraints related to the counter-signatures
      */
     counterSignatureConstraints?: SignatureConstraintsDTO;
 
     /**
      * Constraints on the timestamps
      */
     timeStampConstraints?: TimeStampConstraintsDTO;
 
     /**
      * Constraints related to the revocation data
      */
     revocationConstraints?: RevocationConstraintsDTO;
 
     /**
      * Global constraints about cryptographic usage (encryption, digest, key length, algorithm deprecation,...).
      * If no specific constraints is added in Signature/Timestamp/... elements, this configuration will be used.
      */
     cryptographicConstraint?: CryptographicConstraintDTO;
 
     /**
      * Checks / Defines the validation model shell, chain or hybrid
      */
     modelConstraint?: ModelConstraintDTO;
 
     /**
      * Constraints related to the European context (trusted list validity,...)
      */
     eIDAS?: EidasDTO;
 
     /**
      * The policy Name
      */
     name?: String;
}
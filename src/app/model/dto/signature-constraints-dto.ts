import { BasicSignatureConstraintsDTO } from "./basic-signature-constraints-dto";
import { ConstraintDTO } from "./constraint-dto";
import { MultiValuesConstraintDTO } from "./multi-values-constraint-dto";
import { SignedAttributesConstraintsDTO } from "./signed-attributes-constraints-dto";
import { UnsignedAttributesConstraintsDTO } from "./unsigned-attributes-constraints-dto";

export class SignatureConstraintsDTO extends ConstraintDTO {

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
   basicSignatureConstraints?: BasicSignatureConstraintsDTO;

   /**
    * Group of checks on the signed attributes/properties
    */
   signedAttributesConstraints?: SignedAttributesConstraintsDTO;

   /**
    * Group of checks on the unsigned attributes/properties
    */
   unsignedAttributesConstraints?: UnsignedAttributesConstraintsDTO;

   override populate(dic: Map<string, any>) {
      this.structuralValidation = dic.get('StructuralValidation') as String;
      this.acceptablePolicies = dic.get('AcceptablePolicies') as MultiValuesConstraintDTO;
      this.policyAvailable = dic.get('PolicyAvailable') as String;
      this.signaturePolicyStorePresent = dic.get('SignaturePolicyStorePresent') as String;
      this.policyHashMatch = dic.get('PolicyHashMatch') as String;
      this.acceptableFormats = dic.get('AcceptableFormats') as MultiValuesConstraintDTO;
      this.fullScope = dic.get('FullScope') as String;
      var basicSignatureConstraintsDic = dic.get('BasicSignatureConstraints');
      if (basicSignatureConstraintsDic != undefined) {
         this.basicSignatureConstraints = new BasicSignatureConstraintsDTO();
         this.basicSignatureConstraints.populate(basicSignatureConstraintsDic);
      }
      else
         this.basicSignatureConstraints = undefined;

      var signedAttributesConstraintsDic = dic.get('SignedAttributes')
      if (signedAttributesConstraintsDic != undefined) {
         this.signedAttributesConstraints = new SignedAttributesConstraintsDTO();
         this.signedAttributesConstraints.populate(signedAttributesConstraintsDic);
      }
      else
         this.signedAttributesConstraints = undefined;

      var unsignedAttributesConstraintsDic = dic.get('UnsignedAttributes');
      if (unsignedAttributesConstraintsDic != undefined) {
         this.unsignedAttributesConstraints = new UnsignedAttributesConstraintsDTO();
         this.unsignedAttributesConstraints.populate(unsignedAttributesConstraintsDic);
      }
      else
         this.unsignedAttributesConstraints = undefined;
   }
}
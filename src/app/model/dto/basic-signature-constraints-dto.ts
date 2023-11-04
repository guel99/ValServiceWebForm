import { CertificateConstraintsDTO } from "./certificate-constraints-dto";
import { ConstraintDTO } from "./constraint-dto";
import { CryptographicConstraintDTO } from "./cryptographic-constraint-dto";
import { MultiValuesConstraintDTO } from "./multi-values-constraint-dto";

export class BasicSignatureConstraintsDTO extends ConstraintDTO {

   /**
    * Checks if CMS Signed Data Signer Information
    * Store has only one signer information (PAdES only)
    */
   signerInformationStore: String;

   /**
    * Checks if the signed revision has more or less pages
    * comparing to the final provided document
    */
   pdfPageDifference: String;

   /**
    * Checks if the document contains any annotation overlaps
    */
   pdfAnnotationOverlap: String;

   /**
    * Checks if the signed revision have a visual
    * difference(s) with the provided document
    */
   pdfVisualDifference: String;

   /**
    * Verifies whether the document does not contain undefined
    * changes after the signature revision
    */
   undefinedChanges: String;

   /**
    * Checks if the related trust service type identifier is
    * in the acceptable values list
    */
   trustedServiceTypeIdentifier: MultiValuesConstraintDTO;

   /**
    * Checks if the related trust service status is in the
    * acceptable values list
    */
   trustedServiceStatus: MultiValuesConstraintDTO;

   /**
    * Group of checks to operate on the signing certificate
    */
   signingCertificateConstraints?: CertificateConstraintsDTO;

   /**
    * Group of checks to operate on the CA certificate(s)
    */
   caCertificateConstraints?: CertificateConstraintsDTO;

   /**
    * Group of cryptographic checks to operate on the current signed token
    */
   cryptographicConstraints: CryptographicConstraintDTO;

   override populate(dic: Map<string, any>): void {

      this.signerInformationStore = dic.get('SignerInformationStore') as String;
      this.pdfPageDifference = dic.get('PdfPageDifference') as String;
      this.pdfAnnotationOverlap = dic.get('PdfAnnotationOverlap') as String;
      this.pdfVisualDifference = dic.get('PdfVisualDifference') as String;
      this.undefinedChanges = dic.get('UndefinedChanges') as String;
      this.trustedServiceTypeIdentifier = dic.get('TrustedServiceTypeIdentifier') as MultiValuesConstraintDTO;
      this.trustedServiceStatus = dic.get('TrustedServiceStatus') as MultiValuesConstraintDTO;
      this.cryptographicConstraints = dic.get('Cryptographic') as CryptographicConstraintDTO;

      var signingCertificateConstraintsDic = dic.get('SigningCertificate');
      if (signingCertificateConstraintsDic != undefined) {
         this.signingCertificateConstraints = new CertificateConstraintsDTO();
         this.signingCertificateConstraints.populate(signingCertificateConstraintsDic);
      }
      else
         this.signingCertificateConstraints = undefined;

      var caCertificateConstraintsDic = dic.get('CaCertificate');
      if (caCertificateConstraintsDic != undefined) {
         this.caCertificateConstraints = new CertificateConstraintsDTO();
         this.caCertificateConstraints.populate(caCertificateConstraintsDic);
      }
      else
         this.caCertificateConstraints = undefined;
   }
}
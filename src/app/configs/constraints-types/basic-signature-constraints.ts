import { ConstraintType } from "src/app/model/enums/policy/constraint-types";
import { CertificateConstraints } from "./certificate-constraints";
import { Constraints } from "./constraints";

export class BasicSignatureConstraints extends Constraints{

    /**
     * List that stored all configured container constraints
     */
    static constraints = [
        {
            ruleName: 'Signer information store',
            info: "Checks if CMS Signed Data Signer Information Store has only one signer information (PAdES only)",
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'PDF page difference (PAdES rule)',
            type: ConstraintType.LEVEL_CONSTRAINT
          },
          {
            ruleName: 'PDF annotation overlap (PAdES rule)',
            type: ConstraintType.LEVEL_CONSTRAINT
          },
          {
            ruleName: 'PDF visual difference',
            type: ConstraintType.LEVEL_CONSTRAINT
          },
          {
            ruleName: 'Undefined changes',
            type: ConstraintType.LEVEL_CONSTRAINT
          },
          {
            ruleName: 'Trusted service type identifier',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            placeholder: "Type the identifier",
            onEmptyValue: "Please specify the identifier"
          },
          {
            ruleName: 'Trusted service status',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            placeholder: "Type the identifier",
            onEmptyValue: "Please specify the identifier"
          },
          {
            ruleName: 'Cryptographic constraints',
            type: ConstraintType.CRYPTOGRAPHIC_CONSTRAINT
          },
          {
            ruleName: 'Signing certificate',
            type: ConstraintType.CERTIFICATE_CONSTRAINT,
            instruction: 'Group of checks to operate on the signing certificate',
            constraints: CertificateConstraints.constraints
          },
          {
            ruleName: 'CA Certificate',
            type: ConstraintType.CERTIFICATE_CONSTRAINT,
            instruction: 'Group of checks to operate on the CA certificate(s)',
            constraints: CertificateConstraints.constraints
          }
    ]

    constructor (ruleName: string, instruction: string, constraints?: Array<Constraints>) { super(ruleName, instruction, constraints); }
}
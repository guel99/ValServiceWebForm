import { ConstraintDTO } from "./constraint-dto";
import { CryptographicConstraintDTO } from "./cryptographic-constraint-dto";
import { MultiValuesConstraintDTO } from "./multi-values-constraint-dto";
import { TimeConstraintDTO } from "./time-constraint-dto";

export class CertificateConstraintsDTO extends ConstraintDTO{

    recognition: string;
    signature: string;
    notExpired: string;
    authorityInfoAccessPresent: string;
    revocationInfoAccessPresent: string;
    revocationDataAvailable: string;
    acceptableRevocationDataFound: string;
    crlNextUpdatePresent: string;
    ocspNextUpdatePresent: string;
    revocationFreshness: TimeConstraintDTO;
    revocationFreshnessNextUpdate: string;
    keyUsage: MultiValuesConstraintDTO;
    extendedKeyUsage: MultiValuesConstraintDTO;
    surname: string;
    givenName: string;
    commonName: string;
    pseudonym: string;
    organizationUnit: string;
    organizationName: string;
    country: string;
    serialNumberPresent: string;
    notRevoked: string;
    notOnHold: string;
    revocationIssuerNotExpired: string;
    selfSigned: string;
    notSelfSigned: string;
    policyIds: MultiValuesConstraintDTO;
    issuedToNaturalPerson: string;
    issuedToLegalPerson: string;
    semanticsIdentifier: MultiValuesConstraintDTO;
    usePseudonym: string;
    cryptographicConstraint: CryptographicConstraintDTO;
}
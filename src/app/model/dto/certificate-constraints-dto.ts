import { ConstraintDTO } from "./constraint-dto";
import { CryptographicConstraintDTO } from "./cryptographic-constraint-dto";
import { MultiValuesConstraintDTO } from "./multi-values-constraint-dto";
import { TimeConstraintDTO } from "./time-constraint-dto";

export class CertificateConstraintsDTO extends ConstraintDTO {

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

    override populate(dic: Map<string, any>): void {
        this.recognition = dic.get('Recognition') as string;
        this.signature = dic.get('Signature') as string;
        this.notExpired = dic.get('NotExpired') as string;
        this.authorityInfoAccessPresent = dic.get('AuthorityInfoAccessPresent') as string;
        this.revocationInfoAccessPresent = dic.get('RevocationInfoAccessPresent') as string;
        this.revocationDataAvailable = dic.get('RevocationDataAvailable') as string;
        this.acceptableRevocationDataFound = dic.get('AcceptableRevocationDataFound') as string;
        this.crlNextUpdatePresent = dic.get('CrlNextUpdatePresent') as string;
        this.ocspNextUpdatePresent = dic.get('OcspNextUpdatePresent') as string;
        this.revocationFreshness = dic.get('RevocationFreshness') as TimeConstraintDTO;
        this.revocationFreshnessNextUpdate = dic.get('RevocationFreshnessNextUpdate') as string;
        this.keyUsage = dic.get('KeyUsage') as MultiValuesConstraintDTO;
        this.extendedKeyUsage = dic.get('ExtendedKeyUsage') as MultiValuesConstraintDTO;
        this.surname = dic.get('Surname') as string;
        this.givenName = dic.get('GivenName') as string;
        this.commonName = dic.get('CommonName') as string;
        this.pseudonym = dic.get('Pseudonym') as string;
        this.organizationUnit = dic.get('OrganizationUnit') as string;
        this.organizationName = dic.get('OrganizationName') as string;
        this.country = dic.get('Country') as string;
        this.serialNumberPresent = dic.get('SerialNumberPresent') as string;
        this.notRevoked = dic.get('NotRevoked') as string;
        this.notOnHold = dic.get('NotOnHold') as string;
        this.revocationIssuerNotExpired = dic.get('RevocationIssuerNotExpired') as string;
        this.selfSigned = dic.get('SelfSigned') as string;
        this.notSelfSigned = dic.get('NotSelfSigned') as string;
        this.policyIds = dic.get('PolicyIds') as MultiValuesConstraintDTO;
        this.issuedToNaturalPerson = dic.get('IssuedToNaturalPerson') as string;
        this.issuedToLegalPerson = dic.get('IssuedToLegalPerson') as string;
        this.semanticsIdentifier = dic.get('SemanticsIdentifier') as MultiValuesConstraintDTO;
        this.usePseudonym = dic.get('UsePseudonym') as string;
        this.cryptographicConstraint = dic.get('Cryptographic') as CryptographicConstraintDTO;
    }
}
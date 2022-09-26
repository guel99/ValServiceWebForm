import { ConstraintType } from "src/app/model/enums/policy/constraint-types";
import { Constraints } from "./constraints";

export class CertificateConstraints extends Constraints {

    static instruction: string = "Please choose the rules you want to apply in the generated signature validation policy. You may enable each rule by clicking in the respective card and fill the required parameters to each of them.";

    static constraints: Array<any> = [
        {
            ruleName: 'Recognition',
            instruction: 'asdasdasdasd',
            type: ConstraintType.LEVEL_CONSTRAINT,
        },
        {
            ruleName: 'Signature',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Not Expired',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Authority info access present',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Revocation info access present',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Revocation data available',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Acceptlable revocation data found',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'CRL next update present',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'OCSP next update present',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Revocation freshness',
            type: ConstraintType.TIME_CONSTRAINT
        },
        {
            ruleName: 'Key usage',
            pattern: '^digitalSignature|nonRepudiation|keyEncipherment|dataEncipherment|keyAgreement|keyCertSign|crlSign|encipherOnly|decipherOnly$',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            placeholder: "e.g. digitalSignature, nonRepudiation, etc",
            onWrongValue: "Invalid value, see https://ec.europa.eu/digital-building-blocks/DSS/webapp-demo/apidocs/eu/europa/esig/dss/enumerations/KeyUsageBit.html",
            onEmptyValue: "Please specify a key usage type"
        },
        {
            ruleName: 'Extended key usage',
            pattern: '^digitalSignature|nonRepudiation|keyEncipherment|dataEncipherment|keyAgreement|keyCertSign|crlSign|encipherOnly|decipherOnly$',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            placeholder: "e.g. digitalSignature, nonRepudiation, etc",
            onWrongValue: "Invalid value, see https://ec.europa.eu/digital-building-blocks/DSS/webapp-demo/apidocs/eu/europa/esig/dss/enumerations/KeyUsageBit.html",
            onEmptyValue: "Please specify a key usage type"
        },
        {
            ruleName: 'Surname',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            onEmptyValue: "Please specify a name"
        },
        {
            ruleName: 'Given name',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            onEmptyValue: "Please specify a name"
        },
        {
            ruleName: 'Common name',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            onEmptyValue: "Please specify a name"
        },
        {
            ruleName: 'Pseudonym',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            onEmptyValue: "Please specify a pseudonym"
        },
        {
            ruleName: 'Organization unit',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            onEmptyValue: "Please specify an organization unit"
        },
        {
            ruleName: 'Organization name',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            onEmptyValue: "Please specify a name"
        },
        {
            ruleName: 'Country',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            onEmptyValue: "Please specify a country"
        },
        {
            ruleName: 'Serial number present',
            type: ConstraintType.TIME_CONSTRAINT
        },
        {
            ruleName: 'Not revoked',
            type: ConstraintType.TIME_CONSTRAINT
        },
        {
            ruleName: 'Not on hold',
            type: ConstraintType.TIME_CONSTRAINT
        },
        {
            ruleName: 'Revocation issuer not expired',
            type: ConstraintType.TIME_CONSTRAINT
        },
        {
            ruleName: 'Self signed',
            type: ConstraintType.TIME_CONSTRAINT
        },
        {
            ruleName: 'Not self signed',
            type: ConstraintType.TIME_CONSTRAINT
        },
        {
            ruleName: 'Policy Ids',
            pattern: '^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$|^([0-2])((\.0)|(\.[1-9][0-9]*))*$',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            placeholder: "e.g. http://awesome-policy.com or 2.16.840.1.113883.3.3190.100",
            onWrongValue: "Insert a valid URL or OID",
            onEmptyValue: "This value can't be empty"
        },
        {
            ruleName: 'Issued to natural person',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Issued to legal person',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Semantics identifier',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            onEmptyValue: "This value can't be empty"
        },
        {
            ruleName: 'Use pseudonym',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Cryptographic',
            type: ConstraintType.CRYPTOGRAPHIC_CONSTRAINT
        }
    ]

    constructor () {
        super(CertificateConstraints.instruction, CertificateConstraints.constraints as Array<Constraints>);
    }
}
import { ConstraintType } from "src/app/model/enums/policy/constraint-types";
import { BasicSignatureConstraints } from "../constraints-types/basic-signature-constraints";
import { CertificateConstraints } from "../constraints-types/certificate-constraints";
import { Constraints } from "../constraints-types/constraints";
import { CryptographicConstraint } from "../constraints-types/cryptographic-constraint";
import { LevelConstraint } from "../constraints-types/level-constraint";
import { MultiValuesConstraint } from "../constraints-types/multi-values-constraints";
import { SignedAttributesConstraints } from "../constraints-types/signed-attributes-constraints";
import { TimeConstraint } from "../constraints-types/time-constraint";
import { UnsignedAttributesConstraints } from "../constraints-types/unsigned-attributes-constraints";
import { ValueConstraint } from "../constraints-types/value-constraint";

export class ConfigParser{

    static parse(content: Array<any>) : Array<Constraints> | undefined {
        if(content === undefined)
            return undefined;
        var array = new Array<Constraints>();
        for(var c of content){
            var constraints: Constraints = new Constraints("", undefined);
            switch (c.type){
                case ConstraintType.LEVEL_CONSTRAINT :
                    constraints = new LevelConstraint(c.ruleName);
                    break;
                case ConstraintType.MULTI_VALUES_CONSTRAINT :
                    constraints = new MultiValuesConstraint(c.ruleName);
                    break;
                case ConstraintType.VALUE_CONSTRAINT :
                    constraints = new ValueConstraint(c.ruleName);
                    break;
                case ConstraintType.TIME_CONSTRAINT :
                    constraints = new TimeConstraint(c.ruleName);
                    break;
                case ConstraintType.CRYPTOGRAPHIC_CONSTRAINT :
                    constraints = new CryptographicConstraint(c.ruleName);
                    break;
                case ConstraintType.CERTIFICATE_CONSTRAINT :
                    constraints = new CertificateConstraints(c.ruleName, c.instruction, ConfigParser.parse(c.constraints));
                    break;
                case ConstraintType.BASIC_SIGNATURE_CONSTRAINT :
                    constraints = new BasicSignatureConstraints(c.ruleName, c.instruction, ConfigParser.parse(c.constraints));
                    break;
                case ConstraintType.SIGNED_ATTRIBUTES_CONSTRAINT :
                    constraints = new SignedAttributesConstraints(c.ruleName, c.instruction, ConfigParser.parse(c.constraints));
                    break;
                case ConstraintType.UNSIGNED_ATTRIBUTES_CONSTRAINT :
                    constraints = new UnsignedAttributesConstraints(c.ruleName, c.instruction, ConfigParser.parse(c.constraints));
                    break;
                default:
                    break;
            }
            constraints.info = c.info;
            constraints.type = c.type;
            array.push(constraints);
        }
        return array;
    }
}
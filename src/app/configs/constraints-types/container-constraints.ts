import { ConstraintType } from "../../model/enums/policy/constraint-types";
import { ConfigParser } from "../parser/config-parser";
import { Constraints } from "./constraints";

/**
 * Stores the configured container constraints
 */
export class ContainerConstraints extends Constraints {

  /**
   * The container constraints instruction to be given to the user
   */
  static instruction = "Please choose the rules you want to apply in the generated signature validation policy. You may enable each rule by clicking in the respective card and fill the required parameters to each of them.";

  /**
   * List that stored all configured container constraints
   */
  static constraints = [
    {
      ruleName: 'Acceptable container types',
      type: ConstraintType.MULTI_VALUES_CONSTRAINT,
      info: {
        pattern: '^ASiC-S|ASiC-E$',
        placeholder: "ASiC-S or ASiC-E",
        onWrongValue: "Invalid container type",
        onEmptyValue: "Please specify a container type"
      }
    },
    {
      ruleName: 'Zip comment present',
      type: ConstraintType.LEVEL_CONSTRAINT
    },
    {
      ruleName: 'Acceptable zip comment',
      type: ConstraintType.MULTI_VALUES_CONSTRAINT,
      info: {
        placeholder: "Type any zip comment you consider valid",
        onEmptyValue: "Please specify any comment you want"
      }
    },
    {
      ruleName: 'Mime-type file present',
      type: ConstraintType.LEVEL_CONSTRAINT
    },
    {
      ruleName: 'Acceptable mime-type file content',
      info: {
        pattern: '^[-\\w.]+/[\\+-\\w.]+$',
        placeholder: "e.g. application/vnd.etsi.asic-s+zip",
        onWrongValue: "Invalid mime type",
        onEmptyValue: "Please specify a valid mime type"
      },
      type: ConstraintType.MULTI_VALUES_CONSTRAINT,
    },
    {
      ruleName: 'Manifest file present',
      type: ConstraintType.LEVEL_CONSTRAINT
    },
    {
      ruleName: 'Signed files present',
      type: ConstraintType.LEVEL_CONSTRAINT
    },
    {
      ruleName: 'All files signed',
      type: ConstraintType.LEVEL_CONSTRAINT
    }
  ]

  constructor(ruleName:string, instruction: string, constraints?: Array<Constraints>) {
    super(ruleName, instruction, constraints);
  }
}
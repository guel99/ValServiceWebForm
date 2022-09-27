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
      ruleName: 'AcceptableContainerTypes',
      type: ConstraintType.MULTI_VALUES_CONSTRAINT,
      info: {
        pattern: '^ASiC-S|ASiC-E$',
        placeholder: "ASiC-S or ASiC-E",
        onWrongValue: "Invalid container type",
        onEmptyValue: "Please specify a container type"
      }
    },
    {
      ruleName: 'ZipCommentPresent',
      type: ConstraintType.LEVEL_CONSTRAINT
    },
    {
      ruleName: 'AcceptableZipComment',
      type: ConstraintType.MULTI_VALUES_CONSTRAINT,
      info: {
        placeholder: "Type any zip comment you consider valid",
        onEmptyValue: "Please specify any comment you want"
      }
    },
    {
      ruleName: 'MimeTypeFilePresent',
      type: ConstraintType.LEVEL_CONSTRAINT
    },
    {
      ruleName: 'AcceptableMimeTypeFileContent',
      info: {
        pattern: '^[-\\w.]+/[\\+-\\w.]+$',
        placeholder: "e.g. application/vnd.etsi.asic-s+zip",
        onWrongValue: "Invalid mime type",
        onEmptyValue: "Please specify a valid mime type"
      },
      type: ConstraintType.MULTI_VALUES_CONSTRAINT,
    },
    {
      ruleName: 'ManifestFilePresent',
      type: ConstraintType.LEVEL_CONSTRAINT
    },
    {
      ruleName: 'SignedFilesPresent',
      type: ConstraintType.LEVEL_CONSTRAINT
    },
    {
      ruleName: 'AllFilesSigned',
      type: ConstraintType.LEVEL_CONSTRAINT
    }
  ]

  constructor(ruleName:string, instruction: string, constraints?: Array<Constraints>) {
    super(ruleName, instruction, constraints);
  }
}
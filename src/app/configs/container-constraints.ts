import { ConstraintType } from "../model/enums/policy/constraint-types";

/**
 * Stores the configured container constraints
 */
export class ContainerConstraints{

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
          pattern: '^ASiC-S|ASiC-E$',
          type: ConstraintType.MULTI_VALUES_CONSTRAINT,
          placeholder: "ASiC-S or ASiC-E",
          onWrongValue: "Invalid container type",
          onEmptyValue: "Please specify a container type"
        },
        {
          ruleName: 'ZipCommentPresent',
          type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
          ruleName: 'AcceptableZipComment',
          type: ConstraintType.MULTI_VALUES_CONSTRAINT,
          placeholder:"Type any zip comment you consider valid",
          onEmptyValue: "Please specify any comment you want"
        },
        {
          ruleName: 'MimeTypeFilePresent',
          type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
          ruleName: 'AcceptableMimeTypeFileContent',
          pattern: '^[-\\w.]+/[\\+-\\w.]+$',
          type: ConstraintType.MULTI_VALUES_CONSTRAINT,
          placeholder: "e.g. application/vnd.etsi.asic-s+zip",
          onWrongValue: "Invalid mime type",
          onEmptyValue: "Please specify a valid mime type"
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
}
import { NsPrefixMappingType } from "../valRequestElems/inDocs/nsPrefixMappingType";

export class ManifestResultType{

    /**
     * This element identifies the manifest reference, in the XML signature, to which this result
     * pertains
     */
    xPath: string;

    /**
     * The Status element MUST contain one instance of a URI. » [DSS-4.3.24-2] Its value is
     * limited to an item of the following set:
     * urn:oasis:names:tc:dss:1.0:manifeststatus:Valid
     * urn:oasis:names:tc:dss:1.0:manifeststatus:Invalid
     * This element indicates the manifest validation outcome
     */
    status: string;

    /**
     * Defines the mapping of namespace URIs to namespace prefixes
     */
    nsDecl: Array<NsPrefixMappingType>;
}
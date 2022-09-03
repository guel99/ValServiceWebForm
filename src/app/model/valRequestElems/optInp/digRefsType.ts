export class DigRefsType{

    /**
     * Shall be the base-64 encoded value of the digest of the referenced digital
     * signature computed using the digest algorithm identified in DigestMethod
     */
    digVals:Array<string>;

    /**
     * Shall be an URI identifying a digest algorithm.
     */
    digAlg:string;

    /**
     * Shall be an URI identifying a canonicalization algorithm, in case of XAdES
     */
    digCanAlg?:string;
}
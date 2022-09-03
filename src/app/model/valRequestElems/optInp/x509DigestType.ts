/**
 * The X509Digest component contains a base64-encoded digest of a certificate. The digest algorithm
 * URI is identified with a required Algorithm element
 */
export class X509DigestType{
    value?:string;
    alg:string;
}
import { NameIDType } from "./nameIDType";

/**
 * This element indicates the identity of the 
 * client who is making a request
 */
export class ClaimedIdentityType{
    name:NameIDType;
    suppInfo?:object;
}
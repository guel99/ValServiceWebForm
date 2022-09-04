import { OptionalOutputsVerify } from "./valResponseElems/optionalOutputsVerify";
import { Result } from "./valResponseElems/result";

export class ValidationResponse{
    /**
     * This component shall contain a major result, which shall report whether the server has been able to perform its task,
     * regardless the results obtained. This component may also contain a minor result providing additional information on the
     * task performed by the server.
     */
    result?: Result;

    profile?: Array<string>;

    /**
     * The RequestID element is used to correlate 
     * this response with its request
     */
    reqID?: string;

    /**
     * The ResponseID element
     */
    respID?:string;

    optOutp?: OptionalOutputsVerify;
}
/**
 * Encapsules the response from the server when 
 * is requested a policy search by the user
 */
export class RemotePolicyDTO{
    /**
     * The policy id
     */
    id: String;
    /**
     * The server url that 
     * responsed to the user
     */
    source: String;

    constructor(id: String, source: String){
        this.id = id;
        this.source = source;
    }
}
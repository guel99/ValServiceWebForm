import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class FeedBackService{

    fstPartSuccessMessage: string

    getSuccessMessage(policyId: string, timestamp: string) {
        return "The polic was successfully created with the id '" + policyId + "'. Creation timestamp: '" + timestamp + "'. Do you want to download the xml policy file?"
    }
}
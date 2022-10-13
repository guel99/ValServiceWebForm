import { ConstraintDTO } from "./constraint-dto";
import { TimeConstraintDTO } from "./time-constraint-dto";
import { ValueConstraintDTO } from "./value-constraint-dto";

export class EidasDTO extends ConstraintDTO{

    /**
     * Checks the Trusted List freshness to ensure the validation uses an up-to-date version
     */
     tlFreshness: TimeConstraintDTO;

     /**
      * Checks if the Trusted List is not expired (NextUpdate)
      */
     tlNotExpired: String;
 
     /**
      * Checks if the signature of the Trusted List is valid
      */
     tlWellSigned: String;
 
     /**
      * Checks if the version (TSLVersionIdentifier) of the
      * Trusted List is equals to the given value
      */
     tlVersion: ValueConstraintDTO;

     override populate(dic: Map<string, any>): void {
         
     }
}
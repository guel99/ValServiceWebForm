export class Algo{
    /**
     * Algo name
     */
    value: string;

    /**
     * The minimal key length
     */
    size: number;

    /**
     * The expiration date
     */
    date: string;

    public equals(obj: Object) : boolean {
        if(this.value === obj)
            return true;
        if(obj == null)
            return false;
        var other = new Algo();
        return this.value === other.value; 
    }
}
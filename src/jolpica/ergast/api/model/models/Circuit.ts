import type { CircuitApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Location } from './Location';
import { Model } from './Model';

export class Circuit extends Model {
    /**
     * The ID of this circuit used by the Jolpica API
     */
    public readonly id: string;
    /**
     * The name of this circuit
     */
    public readonly name: string;
    /**
     * URL to the wikipedia page about this circuit
     */
    public readonly wikiUrl: string;
    /**
     * The location of the circuit.
     */
    public readonly location: Location;

    public constructor(data: CircuitApiData, http: F1Api) {
        super(http);

        this.id = data.circuitId;
        this.wikiUrl = data.url;
        this.name = data.circuitName;
        this.location = new Location(data.Location, this.http);
    }
}

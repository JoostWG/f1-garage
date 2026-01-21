import type { ConstructorApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';

export interface TeamJSON {
    id: string | null;
    wikiUrl: string | null;
    name: string;
    nationality: string | null;
}

export class Team extends Model {
    public readonly id: string | null;
    public readonly wikiUrl: string | null;
    public readonly name: string;
    public readonly nationality: string | null;

    public constructor(data: ConstructorApiData, http: F1Api) {
        super(http);

        this.id = data.constructorId ?? null;
        this.wikiUrl = data.url ?? null;
        this.name = data.name;
        this.nationality = data.nationality ?? null;
    }

    public override toJSON(): TeamJSON {
        return {
            id: this.id,
            wikiUrl: this.wikiUrl,
            name: this.name,
            nationality: this.nationality,
        };
    }
}

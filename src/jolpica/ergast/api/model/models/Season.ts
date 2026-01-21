import type { SeasonApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';

export interface SeasonJSON {
    year: number;
    wikipediaUrl: string;
}

export class Season extends Model {
    public readonly year: number;
    public readonly wikipediaUrl: string;

    public constructor(data: SeasonApiData, http: F1Api) {
        super(http);

        this.year = Number(data.season);
        this.wikipediaUrl = data.url;
    }

    public override toJSON(): SeasonJSON {
        return {
            year: this.year,
            wikipediaUrl: this.wikipediaUrl,
        };
    }
}

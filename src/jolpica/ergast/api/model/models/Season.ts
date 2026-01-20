import type { SeasonApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';

export class Season extends Model {
    public readonly year: number;
    public readonly wikiUrl: string;

    public constructor(data: SeasonApiData, http: F1Api) {
        super(http);

        this.year = Number(data.season);
        this.wikiUrl = data.url;
    }
}

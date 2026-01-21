import type { FastestLapTimeApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';

export interface FastestLapTimeJSON {
    time: string;
}

export class FastestLapTime extends Model {
    public readonly time: string;

    public constructor(data: FastestLapTimeApiData, http: F1Api) {
        super(http);

        this.time = data.time;
    }

    public override toJSON(): FastestLapTimeJSON {
        return {
            time: this.time,
        };
    }
}

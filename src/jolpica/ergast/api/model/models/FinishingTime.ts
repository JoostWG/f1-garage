import type { FinishingTimeApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';

export interface FinishingTimeJSON {
    milliseconds: number;
    time: string;
}

export class FinishingTime extends Model {
    public readonly milliseconds: number;
    public readonly time: string;

    public constructor(data: FinishingTimeApiData, http: F1Api) {
        super(http);

        this.milliseconds = Number(data.millis);
        this.time = data.time;
    }

    public override toJSON(): FinishingTimeJSON {
        return {
            milliseconds: this.milliseconds,
            time: this.time,
        };
    }
}

import type { FinishingTimeApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';

export class FinishingTime extends Model {
    public readonly milliseconds: number;
    public readonly time: string;

    public constructor(data: FinishingTimeApiData, http: F1Api) {
        super(http);

        this.milliseconds = Number(data.millis);
        this.time = data.time;
    }
}

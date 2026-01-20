import type { FastestLapApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { AverageSpeed } from './AverageSpeed';
import { FastestLapTime } from './FastestLapTime';
import { Model } from './Model';

export class FastestLap extends Model {
    public readonly rank: number;
    public readonly lap: number;
    public readonly time: FastestLapTime;
    public readonly averageSpeed: AverageSpeed | null;

    public constructor(data: FastestLapApiData, http: F1Api) {
        super(http);

        this.rank = Number(data.rank);
        this.lap = Number(data.lap);
        this.time = new FastestLapTime(data.Time, this.http);

        this.averageSpeed = data.AverageSpeed !== undefined
            ? new AverageSpeed(data.AverageSpeed, this.http)
            : null;
    }
}

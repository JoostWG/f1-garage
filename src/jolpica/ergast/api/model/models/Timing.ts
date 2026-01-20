import type { TimingApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';

export class Timing extends Model {
    public readonly driverId: string;
    public readonly position: number;
    public readonly time: string;

    public constructor(data: TimingApiData, http: F1Api) {
        super(http);

        this.driverId = data.driverId;
        this.position = Number(data.position);
        this.time = data.time;
    }
}

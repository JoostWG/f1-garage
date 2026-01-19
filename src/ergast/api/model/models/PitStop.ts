import type { PitStopApiData, RaceApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';
import { Race } from './Race';

export class PitStop extends Model {
    public readonly driverId: string;
    public readonly lap: number | null;
    public readonly stop: number | null;
    public readonly time: string | null;
    public readonly duration: number | null;
    public readonly race: Race;

    public constructor(data: PitStopApiData, raceData: RaceApiData, http: F1Api) {
        super(http);

        this.driverId = data.driverId;
        this.lap = data.lap !== undefined ? Number(data.lap) : null;
        this.stop = data.stop !== undefined ? Number(data.stop) : null;
        this.time = data.time ?? null;
        this.duration = data.duration !== undefined ? Number(data.duration) : null;
        this.race = new Race(raceData, this.http);
    }
}

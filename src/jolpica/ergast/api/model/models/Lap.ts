import type { LapApiData, RaceApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';
import { Race, type RaceJSON } from './Race';
import { Timing, type TimingJSON } from './Timing';

export interface LapJSON {
    number: number;
    timings: TimingJSON[];
    race: RaceJSON;
}

export class Lap extends Model {
    public readonly number: number;
    public readonly timings: readonly Timing[];
    public readonly race: Race;

    public constructor(data: LapApiData, raceData: RaceApiData, http: F1Api) {
        super(http);

        this.number = Number(data.number);
        this.timings = data.Timings.map((timingData) => new Timing(timingData, this.http));
        this.race = new Race(raceData, this.http);
    }

    public override toJSON(): LapJSON {
        return {
            number: this.number,
            timings: this.timings.map((timing) => timing.toJSON()),
            race: this.race.toJSON(),
        };
    }
}

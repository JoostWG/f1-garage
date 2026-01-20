import type { RaceApiData, SprintResultApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Driver } from './Driver';
import { FastestLap } from './FastestLap';
import { FinishingTime } from './FinishingTime';
import { Model } from './Model';
import { Race } from './Race';
import { Team } from './Team';

export class SprintResult extends Model {
    public readonly number: number;
    public readonly position: string;
    public readonly positionText: string;
    public readonly points: number;
    public readonly driver: Driver;
    public readonly team: Team | null;
    public readonly grid: number | null;
    public readonly laps: number | null;
    public readonly status: string | null;
    public readonly finishingTime: FinishingTime | null;
    public readonly fastestLap: FastestLap | null;
    public readonly race: Race;

    public constructor(data: SprintResultApiData, raceData: RaceApiData, http: F1Api) {
        super(http);

        this.number = Number(data.number);
        this.position = data.position;
        this.positionText = data.positionText;
        this.points = Number(data.points);
        this.driver = new Driver(data.Driver, this.http);

        this.team = data.Constructor !== undefined
            ? new Team(data.Constructor, this.http)
            : null;

        this.grid = data.grid !== undefined ? Number(data.grid) : null;
        this.laps = data.laps !== undefined ? Number(data.laps) : null;
        this.status = data.status ?? null;

        this.finishingTime = data.Time !== undefined
            ? new FinishingTime(data.Time, this.http)
            : null;

        this.fastestLap = data.FastestLap !== undefined
            ? new FastestLap(data.FastestLap, this.http)
            : null;

        this.race = new Race(raceData, this.http);
    }
}

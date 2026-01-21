import type { RaceApiData, SprintResultApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Driver, type DriverJSON } from './Driver';
import { FastestLap, type FastestLapJSON } from './FastestLap';
import { FinishingTime, type FinishingTimeJSON } from './FinishingTime';
import { Model } from './Model';
import { Race, type RaceJSON } from './Race';
import { Team, type TeamJSON } from './Team';

export interface SprintResultJSON {
    number: number;
    position: string;
    positionText: string;
    points: number;
    driver: DriverJSON;
    team: TeamJSON | null;
    grid: number | null;
    laps: number | null;
    status: string | null;
    finishingTime: FinishingTimeJSON | null;
    fastestLap: FastestLapJSON | null;
    race: RaceJSON;
}

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

    public override toJSON(): SprintResultJSON {
        return {
            number: this.number,
            position: this.position,
            positionText: this.positionText,
            points: this.points,
            driver: this.driver.toJSON(),
            team: this.team?.toJSON() ?? null,
            grid: this.grid,
            laps: this.laps,
            status: this.status,
            finishingTime: this.finishingTime?.toJSON() ?? null,
            fastestLap: this.fastestLap?.toJSON() ?? null,
            race: this.race.toJSON(),
        };
    }
}

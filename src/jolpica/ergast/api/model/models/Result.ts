import type { RaceApiData, ResultApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Driver, type DriverJSON } from './Driver';
import { FastestLap, type FastestLapJSON } from './FastestLap';
import { FinishingTime, type FinishingTimeJSON } from './FinishingTime';
import { Model } from './Model';
import { Race, type RaceJSON } from './Race';
import { Team, type TeamJSON } from './Team';

export interface ResultJSON {
    number: number;
    position: string;
    positionText: string;
    points: number;
    driver: DriverJSON;
    team: TeamJSON | null;
    grid: number | null;
    laps: number | null;
    status: string | null;
    fastestLap: FastestLapJSON | null;
    finishingTime: FinishingTimeJSON | null;
    race: RaceJSON;
}

export class Result extends Model {
    public readonly number: number;
    public readonly position: string;
    public readonly positionText: string;
    public readonly points: number;
    public readonly driver: Driver;
    public readonly team: Team | null;
    public readonly grid: number | null;
    public readonly laps: number | null;
    public readonly status: string | null;
    public readonly fastestLap: FastestLap | null;
    public readonly finishingTime: FinishingTime | null;
    public readonly race: Race;

    public constructor(data: ResultApiData, raceData: RaceApiData, http: F1Api) {
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

        this.fastestLap = data.FastestLap !== undefined
            ? new FastestLap(data.FastestLap, this.http)
            : null;

        this.finishingTime = data.Time !== undefined
            ? new FinishingTime(data.Time, this.http)
            : null;

        this.race = new Race(raceData, this.http);
    }

    /**
     * Returns the driver's age at the time of the race
     */
    public get driverAge(): number | null {
        return this.driver.ageAt(this.race.dateTime);
    }

    /**
     * Calculates the circuit length in meters based of the fastest lap time and average speed.
     */
    public calculateCircuitLength(): number | null {
        if (!this.fastestLap?.averageSpeed) {
            return null;
        }

        const match = this.fastestLap.time.time.match(/(?<minutes>\d+):(?<seconds>\d+.\d+)/u);

        if (!match?.groups) {
            return null;
        }

        return (Number(match.groups.minutes) / 60 + Number(match.groups.seconds) / 3600)
            * this.fastestLap.averageSpeed.kph * 1000;
    }

    public override toJSON(): ResultJSON {
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
            fastestLap: this.fastestLap?.toJSON() ?? null,
            finishingTime: this.finishingTime?.toJSON() ?? null,
            race: this.race.toJSON(),
        };
    }
}

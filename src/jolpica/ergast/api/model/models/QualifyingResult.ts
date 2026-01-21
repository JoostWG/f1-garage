import type { QualifyingResultApiData, RaceApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Driver, type DriverJSON } from './Driver';
import { Model } from './Model';
import { Race, type RaceJSON } from './Race';
import { Team, type TeamJSON } from './Team';

export interface QualifyingResultJSON {
    number: number;
    position: number | null;
    driver: DriverJSON;
    team: TeamJSON;
    q1: string | null;
    q2: string | null;
    q3: string | null;
    race: RaceJSON;
}

export class QualifyingResult extends Model {
    public readonly number: number;
    public readonly position: number | null;
    public readonly driver: Driver;
    public readonly team: Team;
    public readonly q1: string | null;
    public readonly q2: string | null;
    public readonly q3: string | null;
    public readonly race: Race;

    public constructor(data: QualifyingResultApiData, raceData: RaceApiData, http: F1Api) {
        super(http);

        this.number = Number(data.number);
        this.position = data.position !== undefined ? Number(data.position) : null;
        this.driver = new Driver(data.Driver, this.http);
        this.team = new Team(data.Constructor, this.http);
        this.q1 = data.Q1 ?? null;
        this.q2 = data.Q2 ?? null;
        this.q3 = data.Q3 ?? null;
        this.race = new Race(raceData, this.http);
    }

    public override toJSON(): QualifyingResultJSON {
        return {
            number: this.number,
            position: this.position,
            driver: this.driver.toJSON(),
            team: this.team.toJSON(),
            q1: this.q1,
            q2: this.q2,
            q3: this.q3,
            race: this.race.toJSON(),
        };
    }
}

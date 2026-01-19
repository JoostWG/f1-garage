import type { QualifyingResultApiData, RaceApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Driver } from './Driver';
import { Model } from './Model';
import { Race } from './Race';
import { Team } from './Team';

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
}

import type { DriverStandingApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Driver, type DriverJSON } from './Driver';
import { Model } from './Model';
import { Team, type TeamJSON } from './Team';

export interface DriverStandingJSON {
    season: number;
    round: number;
    position: number | null;
    positionText: string;
    points: number;
    wins: number;
    driver: DriverJSON;
    teams: TeamJSON[];
}

export class DriverStanding extends Model {
    public readonly season: number;
    public readonly round: number;
    public readonly position: number | null;
    public readonly positionText: string;
    public readonly points: number;
    public readonly wins: number;
    public readonly driver: Driver;
    public readonly teams: readonly Team[];

    public constructor(data: DriverStandingApiData, season: string, round: string, http: F1Api) {
        super(http);

        this.season = Number(season);
        this.round = Number(round);
        this.position = data.position !== undefined ? Number(data.position) : null;
        this.positionText = data.positionText;
        this.points = Number(data.points);
        this.wins = Number(data.wins);
        this.driver = new Driver(data.Driver, this.http);
        this.teams = data.Constructors.map((teamData) => new Team(teamData, this.http));
    }

    public override toJSON(): DriverStandingJSON {
        return {
            season: this.season,
            round: this.round,
            position: this.position,
            positionText: this.positionText,
            points: this.points,
            wins: this.wins,
            driver: this.driver.toJSON(),
            teams: this.teams.map((team) => team.toJSON()),
        };
    }
}

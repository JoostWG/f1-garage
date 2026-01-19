import type { DriverStandingApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Driver } from './Driver';
import { Model } from './Model';
import { Team } from './Team';

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
}

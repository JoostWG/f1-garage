import type { ConstructorStandingApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';
import { Team, type TeamJSON } from './Team';

export interface TeamStandingJSON {
    season: number;
    round: number;
    position: string | null;
    positionText: string;
    points: number;
    wins: number;
    team: TeamJSON;
}

export class TeamStanding extends Model {
    public readonly season: number;
    public readonly round: number;
    public readonly position: string | null;
    public readonly positionText: string;
    public readonly points: number;
    public readonly wins: number;
    public readonly team: Team;

    public constructor(
        data: ConstructorStandingApiData,
        season: string,
        round: string,
        http: F1Api,
    ) {
        super(http);

        this.season = Number(season);
        this.round = Number(round);
        this.position = data.position ?? null;
        this.positionText = data.positionText;
        this.points = Number(data.points);
        this.wins = Number(data.wins);
        this.team = new Team(data.Constructor, this.http);
    }

    public override toJSON(): TeamStandingJSON {
        return {
            season: this.season,
            round: this.round,
            position: this.position,
            positionText: this.positionText,
            points: this.points,
            wins: this.wins,
            team: this.team.toJSON(),
        };
    }
}

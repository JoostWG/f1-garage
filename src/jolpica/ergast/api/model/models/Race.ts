import type { RaceApiData, ResultOptions } from '../../../types';
import type { F1Api } from '../F1Api';
import type { PendingRequest } from '../PendingRequest';
import { Circuit } from './Circuit';
import { Model } from './Model';
import type { Result } from './Result';
import { SessionDateTime } from './SessionDateTime';

export class Race extends Model {
    public readonly season: number;
    public readonly round: number;
    public readonly wikiUrl: string | null;
    public readonly name: string;
    public readonly circuit: Circuit;
    public readonly date: string;
    public readonly time: string | null;
    public readonly firstPractice: SessionDateTime | null;
    public readonly secondPractice: SessionDateTime | null;
    public readonly thirdPractice: SessionDateTime | null;
    public readonly qualifying: SessionDateTime | null;
    public readonly sprint: SessionDateTime | null;
    public readonly sprintQualifying: SessionDateTime | null;
    public readonly sprintShootout: SessionDateTime | null;

    public constructor(data: RaceApiData, http: F1Api) {
        super(http);

        this.season = Number(data.season);
        this.round = Number(data.round);
        this.wikiUrl = data.url ?? null;
        this.name = data.raceName;
        this.circuit = new Circuit(data.Circuit, this.http);
        this.date = data.date;
        this.time = data.time ?? null;

        this.firstPractice = data.FirstPractice !== undefined
            ? new SessionDateTime(data.FirstPractice, this.http)
            : null;

        this.secondPractice = data.SecondPractice !== undefined
            ? new SessionDateTime(data.SecondPractice, this.http)
            : null;

        this.thirdPractice = data.ThirdPractice !== undefined
            ? new SessionDateTime(data.ThirdPractice, this.http)
            : null;

        this.qualifying = data.Qualifying !== undefined
            ? new SessionDateTime(data.Qualifying, this.http)
            : null;

        this.sprint = data.Sprint !== undefined
            ? new SessionDateTime(data.Sprint, this.http)
            : null;

        this.sprintQualifying = data.SprintQualifying !== undefined
            ? new SessionDateTime(data.SprintQualifying, this.http)
            : null;

        this.sprintShootout = data.SprintShootout !== undefined
            ? new SessionDateTime(data.SprintShootout, this.http)
            : null;
    }

    public get dateTime(): Date {
        return new Date(this.time !== null ? `${this.date}T${this.time}` : this.date);
    }

    /**
     * Fetch all results and calculate circuit length in meters using average speed and lap time
     */
    public async calculateCircuitLength(): Promise<number | null> {
        const { data: results } = await this.results().get({ limit: 100 });

        const lengths = results
            .map((result) => result.calculateCircuitLength())
            .filter((length) => length !== null);

        if (lengths.length === 0) {
            return null;
        }

        return lengths.reduce((previous, current) => previous + current, 0) / lengths.length;
    }

    public results(options?: Omit<ResultOptions, 'season' | 'round'>): PendingRequest<Result[]> {
        return this.http.results(this.getOptions(options));
    }

    protected getOptions<T>(options: T): T & { season: number; round: number } {
        return { season: this.season, round: this.round, ...options };
    }
}

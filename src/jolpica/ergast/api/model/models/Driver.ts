import type {
    CircuitOptions,
    DriverApiData,
    DriverStandingOptions,
    LapOptions,
    PitStopOptions,
    QualifyingResultOptions,
    RaceOptions,
    ResultOptions,
    SeasonOptions,
    SprintResultOptions,
    StatusOptions,
    TeamOptions,
} from '../../../types';
import type { F1Api } from '../F1Api';
import type { PendingRequest } from '../PendingRequest';
import type { Circuit } from './Circuit';
import type { DriverStanding } from './DriverStanding';
import type { Lap } from './Lap';
import { Model } from './Model';
import type { PitStop } from './PitStop';
import type { QualifyingResult } from './QualifyingResult';
import type { Race } from './Race';
import type { Result } from './Result';
import type { Season } from './Season';
import type { SprintResult } from './SprintResult';
import type { Status } from './Status';
import type { Team } from './Team';

export interface DriverJSON {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string | null;
    nationality: string | null;
    number: number | null;
    code: string | null;
    wikipediaUrl: string | null;
}

export class Driver extends Model {
    /**
     *  Unique ID used by the API
     */
    public readonly id: string;
    /**
     *  The driver's first name
     */
    public readonly firstName: string;
    /**
     *  The driver's last name
     */
    public readonly lastName: string;
    /**
     *  The driver's date of birth
     */
    public readonly dateOfBirth: Date | null;
    /**
     *  The driver's nationality
     */
    public readonly nationality: string | null;
    /**
     *  The driver's racing number
     */
    public readonly number: number | null;
    /**
     *  The driver's three letter code
     */
    public readonly code: string | null;
    /**
     *  URL to wikipedia page
     */
    public readonly wikipediaUrl: string | null;

    public constructor(data: DriverApiData, http: F1Api) {
        super(http);

        this.id = data.driverId;
        this.firstName = data.givenName;
        this.lastName = data.familyName;
        this.dateOfBirth = data.dateOfBirth !== undefined ? new Date(data.dateOfBirth) : null;
        this.nationality = data.nationality ?? null;
        this.number = data.permanentNumber !== undefined ? Number(data.permanentNumber) : null;
        this.code = data.code ?? null;
        this.wikipediaUrl = data.url ?? null;
    }

    /**
     * The driver's full name.
     */
    public get name(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    /**
     * The driver's current age.
     */
    public get age(): number | null {
        return this.ageAt(new Date());
    }

    /**
     * Get the driver's age for a given date.
     */
    public ageAt(date: Date): number | null {
        if (this.dateOfBirth === null) {
            return null;
        }

        const age = date.getFullYear() - this.dateOfBirth.getFullYear();

        if (this.dateOfBirth.getMonth() > date.getMonth()) {
            return age - 1;
        }

        if (
            this.dateOfBirth.getMonth() === date.getMonth()
            && this.dateOfBirth.getDate() > date.getDate()
        ) {
            return age - 1;
        }

        return age;
    }

    /**
     * Get circuits the driver has raced at.
     */
    public circuits(options?: Omit<CircuitOptions, 'driver'>): PendingRequest<Circuit[]> {
        return this.http.circuits(this.getOptions(options));
    }

    public driverStandings(
        options: Omit<DriverStandingOptions, 'driver'>,
    ): PendingRequest<DriverStanding[]> {
        return this.http.driverStandings(this.getOptions(options));
    }

    public laps(options: Omit<LapOptions, 'driver'>): PendingRequest<Lap[]> {
        return this.http.laps(this.getOptions(options));
    }

    public pitStops(options: Omit<PitStopOptions, 'driver'>): PendingRequest<PitStop[]> {
        return this.http.pitStops(this.getOptions(options));
    }

    public qualifyingResults(
        options?: Omit<QualifyingResultOptions, 'driver'>,
    ): PendingRequest<QualifyingResult[]> {
        return this.http.qualifyingResults(this.getOptions(options));
    }

    /**
     * Get races this driver participated in
     */
    public races(options?: Omit<RaceOptions, 'driver'>): PendingRequest<Race[]> {
        return this.http.races(this.getOptions(options));
    }

    public results(options?: Omit<ResultOptions, 'driver'>): PendingRequest<Result[]> {
        return this.http.results(this.getOptions(options));
    }

    public seasons(options?: Omit<SeasonOptions, 'driver'>): PendingRequest<Season[]> {
        return this.http.seasons(this.getOptions(options));
    }

    public sprintResults(
        options?: Omit<SprintResultOptions, 'driver'>,
    ): PendingRequest<SprintResult[]> {
        return this.http.sprintResults(this.getOptions(options));
    }

    public statuses(options?: Omit<StatusOptions, 'driver'>): PendingRequest<Status[]> {
        return this.http.statuses(this.getOptions(options));
    }

    public teams(options?: TeamOptions): PendingRequest<Team[]> {
        return this.http.teams(this.getOptions(options));
    }

    public override toJSON(): DriverJSON {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            dateOfBirth: this.dateOfBirth?.toISOString() ?? null,
            nationality: this.nationality,
            number: this.number,
            code: this.code,
            wikipediaUrl: this.wikipediaUrl,
        };
    }

    protected getOptions<T>(options: T): T & { driver: string } {
        return { driver: this.id, ...options };
    }
}

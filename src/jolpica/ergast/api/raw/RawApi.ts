import type {
    CircuitOptions,
    CircuitsResponse,
    ConstructorStandingsResponse,
    ConstructorsResponse,
    DriverOptions,
    DriverStandingOptions,
    DriverStandingsResponse,
    DriversResponse,
    LapOptions,
    LapsResponse,
    PitStopOptions,
    PitStopsResponse,
    QualifyingResultOptions,
    QualifyingResultsResponse,
    RaceOptions,
    RacesResponse,
    ResultOptions,
    ResultsResponse,
    SeasonOptions,
    SeasonsResponse,
    SprintResultOptions,
    SprintResultsResponse,
    StatusOptions,
    StatusesResponse,
    TeamOptions,
    TeamStandingOptions,
} from '../../types';
import { ErgastBaseApi } from '../ErgastBaseApi';
import { PendingRawRequest } from './PendingRawRequest';

export class RawApi extends ErgastBaseApi {
    public circuits(options?: CircuitOptions): PendingRawRequest<CircuitsResponse> {
        return new PendingRawRequest(this, 'circuits', options ?? {});
    }

    public driverStandings(
        options: DriverStandingOptions,
    ): PendingRawRequest<DriverStandingsResponse> {
        return new PendingRawRequest(this, 'driverstandings', options);
    }

    public drivers(options?: DriverOptions): PendingRawRequest<DriversResponse> {
        return new PendingRawRequest(this, 'drivers', options ?? {});
    }

    public laps(options: LapOptions): PendingRawRequest<LapsResponse> {
        return new PendingRawRequest(this, 'laps', options);
    }

    public pitStops(options: PitStopOptions): PendingRawRequest<PitStopsResponse> {
        return new PendingRawRequest(this, 'pitstops', options);
    }

    public qualifyingResults(
        options?: QualifyingResultOptions,
    ): PendingRawRequest<QualifyingResultsResponse> {
        return new PendingRawRequest(this, 'qualifying', options ?? {});
    }

    public races(options?: RaceOptions): PendingRawRequest<RacesResponse> {
        return new PendingRawRequest(this, 'races', options ?? {});
    }

    public results(options?: ResultOptions): PendingRawRequest<ResultsResponse> {
        return new PendingRawRequest(this, 'results', options ?? {});
    }

    public seasons(options?: SeasonOptions): PendingRawRequest<SeasonsResponse> {
        return new PendingRawRequest(this, 'seasons', options ?? {});
    }

    public sprintResults(options?: SprintResultOptions): PendingRawRequest<SprintResultsResponse> {
        return new PendingRawRequest(this, 'sprint', options ?? {});
    }

    public statuses(options?: StatusOptions): PendingRawRequest<StatusesResponse> {
        return new PendingRawRequest(this, 'status', options ?? {});
    }

    public teamStandings(
        options: TeamStandingOptions,
    ): PendingRawRequest<ConstructorStandingsResponse> {
        return new PendingRawRequest(this, 'constructorstandings', options);
    }

    public teams(options?: TeamOptions): PendingRawRequest<ConstructorsResponse> {
        return new PendingRawRequest(this, 'constructors', options ?? {});
    }
}

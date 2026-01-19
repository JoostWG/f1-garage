import type { MapValueToResource, ValueOf } from '../../types/helpers';
import type {
    CircuitsResponse,
    ConstructorStandingsResponse,
    ConstructorsResponse,
    DriverStandingsResponse,
    DriversResponse,
    LapsResponse,
    PitStopsResponse,
    QualifyingResultsResponse,
    RacesResponse,
    ResultsResponse,
    SeasonsResponse,
    SprintResultsResponse,
    StatusesResponse,
} from './api';
import type {
    CircuitOption,
    CircuitOptions,
    DriverOption,
    DriverOptions,
    DriverStandingOption,
    DriverStandingOptions,
    FastestRankOption,
    FinishPositionOption,
    GridPositionOption,
    LapOption,
    LapOptions,
    PitStopOption,
    PitStopOptions,
    QualifyingResultOption,
    QualifyingResultOptions,
    RaceOptions,
    ResultOptions,
    RoundOption,
    SeasonOption,
    SeasonOptions,
    SprintResultOptions,
    StatusOption,
    StatusOptions,
    TeamOption,
    TeamOptions,
    TeamStandingOption,
    TeamStandingOptions,
} from './options';

export type * from './api';
export type * from './options';

export type AnyApiOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & TeamOption
    & LapOption
    & PitStopOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
    & DriverStandingOption
    & QualifyingResultOption
    & TeamStandingOption
>;

export interface OptionsMap {
    circuits: CircuitOptions;
    constructorstandings: TeamStandingOptions;
    constructors: TeamOptions;
    driverstandings: DriverStandingOptions;
    drivers: DriverOptions;
    laps: LapOptions;
    pitstops: PitStopOptions;
    qualifying: QualifyingResultOptions;
    races: RaceOptions;
    results: ResultOptions;
    seasons: SeasonOptions;
    sprint: SprintResultOptions;
    status: StatusOptions;
}

export interface ResponsesMap {
    circuits: CircuitsResponse;
    constructorstandings: ConstructorStandingsResponse;
    constructors: ConstructorsResponse;
    driverstandings: DriverStandingsResponse;
    drivers: DriversResponse;
    laps: LapsResponse;
    pitstops: PitStopsResponse;
    qualifying: QualifyingResultsResponse;
    races: RacesResponse;
    results: ResultsResponse;
    seasons: SeasonsResponse;
    sprint: SprintResultsResponse;
    status: StatusesResponse;
}

export type AnyResponse = ValueOf<ResponsesMap>;

export type ResponseResource<T extends ValueOf<ResponsesMap>> = MapValueToResource<ResponsesMap, T>;

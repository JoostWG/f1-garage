import type { SuccessResponse } from './';
import type {
    CircuitApiData,
    ConstructorApiData,
    ConstructorStandingApiData,
    DriverApiData,
    DriverStandingApiData,
    LapApiData,
    PitStopApiData,
    QualifyingResultApiData,
    RaceApiData,
    ResultApiData,
    SeasonApiData,
    SprintResultApiData,
    StatusApiData,
} from './data';

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type CircuitsResponse = SuccessResponse<{
    CircuitTable: {
        Circuits: CircuitApiData[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type ConstructorsResponse = SuccessResponse<{
    ConstructorTable: {
        Constructors: ConstructorApiData[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type ConstructorStandingsResponse = SuccessResponse<{
    StandingsTable: {
        StandingsLists: {
            season: string;
            round: string;
            ConstructorStandings: ConstructorStandingApiData[];
        }[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type DriversResponse = SuccessResponse<{
    DriverTable: {
        Drivers: DriverApiData[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type DriverStandingsResponse = SuccessResponse<{
    StandingsTable: {
        StandingsLists: {
            season: string;
            round: string;
            DriverStandings: DriverStandingApiData[];
        }[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type LapsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { Laps: LapApiData[] })[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type PitStopsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { PitStops: PitStopApiData[] })[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type QualifyingResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { QualifyingResults: QualifyingResultApiData[] })[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type RacesResponse = SuccessResponse<{
    RaceTable: {
        Races: RaceApiData[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type ResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & {
            Results: ResultApiData[];
        })[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type SeasonsResponse = SuccessResponse<{
    SeasonTable: {
        Seasons: SeasonApiData[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type SprintResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & {
            SprintResults: SprintResultApiData[];
        })[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type StatusesResponse = SuccessResponse<{
    StatusTable: {
        Status: StatusApiData[];
    };
}>;

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

export type CircuitsResponse = SuccessResponse<{
    CircuitTable: {
        Circuits: CircuitApiData[];
    };
}>;

export type ConstructorsResponse = SuccessResponse<{
    ConstructorTable: {
        Constructors: ConstructorApiData[];
    };
}>;

export type ConstructorStandingsResponse = SuccessResponse<{
    StandingsTable: {
        StandingsLists: {
            season: string;
            round: string;
            ConstructorStandings: ConstructorStandingApiData[];
        }[];
    };
}>;

export type DriversResponse = SuccessResponse<{
    DriverTable: {
        Drivers: DriverApiData[];
    };
}>;

export type DriverStandingsResponse = SuccessResponse<{
    StandingsTable: {
        StandingsLists: {
            season: string;
            round: string;
            DriverStandings: DriverStandingApiData[];
        }[];
    };
}>;

export type LapsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { Laps: LapApiData[] })[];
    };
}>;

export type PitStopsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { PitStops: PitStopApiData[] })[];
    };
}>;

export type QualifyingResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { QualifyingResults: QualifyingResultApiData[] })[];
    };
}>;

export type RacesResponse = SuccessResponse<{
    RaceTable: {
        Races: RaceApiData[];
    };
}>;

export type ResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & {
            Results: ResultApiData[];
        })[];
    };
}>;

export type SeasonsResponse = SuccessResponse<{
    SeasonTable: {
        Seasons: SeasonApiData[];
    };
}>;

export type SprintResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & {
            SprintResults: SprintResultApiData[];
        })[];
    };
}>;

export type StatusesResponse = SuccessResponse<{
    StatusTable: {
        Status: StatusApiData[];
    };
}>;

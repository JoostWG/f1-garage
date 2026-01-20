import type { StatusType } from '../enums';

export interface StatusOption {
    status: StatusType;
}

export interface SeasonOption {
    season: 'current' | (number & {});
}

export interface RoundOption {
    round: 'last' | 'next' | number;
}

export interface CircuitOption {
    circuit: string;
}

export interface DriverOption {
    driver: string;
}

export interface TeamOption {
    team: string;
}

export interface LapOption {
    lap: number;
}

export interface PitStopOption {
    pitStopNumber: number;
}

export interface FastestRankOption {
    fastestRank: number;
}

export interface GridPositionOption {
    gridPosition: number;
}

export interface FinishPositionOption {
    finishPosition: number;
}

export interface DriverStandingOption {
    driverStanding: number;
}

export interface QualifyingResultOption {
    qualifying: number;
}

export interface TeamStandingOption {
    teamStanding: number;
}

export type CircuitOptions = Partial<
    & SeasonOption
    & RoundOption
    & DriverOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
    & TeamOption
    & CircuitOption
>;

export type DriverStandingOptions =
    & Required<SeasonOption>
    & Partial<
        & RoundOption
        & DriverOption
        & DriverStandingOption
    >;

export type DriverOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
    & TeamOption
    & DriverOption
>;

export type LapOptions =
    & Required<SeasonOption & RoundOption>
    & Partial<
        & DriverOption
        & LapOption
        & TeamOption
    >;

export type PitStopOptions =
    & Required<SeasonOption & RoundOption>
    & Partial<
        & DriverOption
        & LapOption
        & TeamOption
    >;

export type QualifyingResultOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & FastestRankOption
    & StatusOption
    & TeamOption
    & QualifyingResultOption
>;

export type RaceOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & FinishPositionOption
    & GridPositionOption
    & StatusOption
    & TeamOption
>;

export type ResultOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & FastestRankOption
    & GridPositionOption
    & StatusOption
    & TeamOption
    & FinishPositionOption
>;

export type SeasonOptions = Partial<
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption
>;

export type SprintResultOptions = Partial<
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption
>;

export type StatusOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & TeamOption
    & DriverOption
    & GridPositionOption
    & FinishPositionOption
    & FastestRankOption
    & StatusOption
>;

export type TeamStandingOptions =
    & Required<SeasonOption>
    & Partial<
        & RoundOption
        & TeamOption
        & TeamStandingOption
    >;

export type TeamOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
>;

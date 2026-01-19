import type { StatusType } from '../enums';

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface StatusOption {
    status: StatusType;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface SeasonOption {
    season: 'current' | (number & {});
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface RoundOption {
    round: 'last' | 'next' | number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface CircuitOption {
    circuit: string;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface DriverOption {
    driver: string;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface TeamOption {
    team: string;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface LapOption {
    lap: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface PitStopOption {
    pitStopNumber: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface FastestRankOption {
    fastestRank: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface GridPositionOption {
    gridPosition: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface FinishPositionOption {
    finishPosition: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface DriverStandingOption {
    driverStanding: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface QualifyingResultOption {
    qualifying: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
export interface TeamStandingOption {
    teamStanding: number;
}

/**
 * @category Options
 *
 * @since 2.1.0
 */
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

/**
 * @category Options
 *
 * @since 2.1.0
 */
export type DriverStandingOptions =
    & Required<SeasonOption>
    & Partial<
        & RoundOption
        & DriverOption
        & DriverStandingOption
    >;

/**
 * @category Options
 *
 * @since 2.1.0
 */
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

/**
 * @category Options
 *
 * @since 2.1.0
 */
export type LapOptions =
    & Required<SeasonOption & RoundOption>
    & Partial<
        & DriverOption
        & LapOption
        & TeamOption
    >;

/**
 * @category Options
 *
 * @since 2.1.0
 */
export type PitStopOptions =
    & Required<SeasonOption & RoundOption>
    & Partial<
        & DriverOption
        & LapOption
        & TeamOption
    >;

/**
 * @category Options
 *
 * @since 2.1.0
 */
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

/**
 * @category Options
 *
 * @since 2.1.0
 */
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

/**
 * @category Options
 *
 * @since 2.1.0
 */
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

/**
 * @category Options
 *
 * @since 2.1.0
 */
export type SeasonOptions = Partial<
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption
>;

/**
 * @category Options
 *
 * @since 2.1.0
 */
export type SprintResultOptions = Partial<
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption
>;

/**
 * @category Options
 *
 * @since 3.0.0
 */
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

/**
 * @category Options
 *
 * @since 2.1.0
 */
export type TeamStandingOptions =
    & Required<SeasonOption>
    & Partial<
        & RoundOption
        & TeamOption
        & TeamStandingOption
    >;

/**
 * @category Options
 *
 * @since 2.1.0
 */
export type TeamOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
>;

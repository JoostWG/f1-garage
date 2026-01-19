import type { StatusType } from '../../enums';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface AverageSpeedApiData {
    units: string;
    speed: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 *
 * @see https://github.com/jolpica/jolpica-f1/blob/main/docs/endpoints/circuits.md#circuits-object-fields
 */
export interface CircuitApiData {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: LocationApiData;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface ConstructorApiData {
    constructorId?: string;
    url?: string;
    name: string;
    nationality?: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface ConstructorStandingApiData {
    position?: string;
    positionText: string;
    points: string;
    wins: string;
    Constructor: ConstructorApiData;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface DateTimeApiData {
    date?: string;
    time?: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface DriverApiData {
    driverId: string;
    givenName: string;
    familyName: string;
    url?: string;
    dateOfBirth?: string;
    nationality?: string;
    permanentNumber?: string;
    code?: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface DriverStandingApiData {
    position?: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: DriverApiData;
    Constructors: ConstructorApiData[];
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface FastestLapApiData {
    rank: string;
    lap: string;
    Time: FastestLapTimeApiData;
    AverageSpeed?: AverageSpeedApiData;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface FastestLapTimeApiData {
    time: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface FinishingTimeApiData {
    millis: string;
    time: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface LapApiData {
    number: string;
    Timings: TimingApiData[];
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface LocationApiData {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface PitStopApiData {
    driverId: string;
    lap?: string;
    stop?: string;
    time?: string;
    duration?: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface QualifyingResultApiData {
    number: string;
    position?: string;
    Driver: DriverApiData;
    Constructor: ConstructorApiData;
    Q1?: string;
    Q2?: string;
    Q3?: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface RaceApiData extends Record<string, unknown> { // temporary extends
    season: string;
    round: string;
    url?: string;
    raceName: string;
    Circuit: CircuitApiData;
    date: string;
    time?: string;
    FirstPractice?: DateTimeApiData;
    SecondPractice?: DateTimeApiData;
    ThirdPractice?: DateTimeApiData;
    Qualifying?: DateTimeApiData;
    Sprint?: DateTimeApiData;
    SprintQualifying?: DateTimeApiData;
    SprintShootout?: DateTimeApiData;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface ResultApiData {
    number: string;
    position: string;
    positionText: string;
    points: string;
    Driver: DriverApiData;
    Constructor?: ConstructorApiData;
    grid?: string;
    laps?: string;
    status?: string;
    FastestLap?: FastestLapApiData;
    Time?: FinishingTimeApiData;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface SeasonApiData {
    season: string;
    url: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface SprintResultApiData {
    number: string;
    position: string;
    positionText: string;
    points: string;
    Driver: DriverApiData;
    Constructor?: ConstructorApiData;
    grid?: string;
    laps?: string;
    status?: string;
    Time?: FinishingTimeApiData;
    FastestLap?: FastestLapApiData;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface StatusApiData {
    statusId: StatusType;
    count: string;
    status: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface TimingApiData {
    driverId: string;
    position: string;
    time: string;
}

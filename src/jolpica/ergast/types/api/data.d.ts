import type { StatusType } from '../../enums';

export interface AverageSpeedApiData {
    units: string;
    speed: string;
}

export interface CircuitApiData {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: LocationApiData;
}

export interface ConstructorApiData {
    constructorId?: string;
    url?: string;
    name: string;
    nationality?: string;
}

export interface ConstructorStandingApiData {
    position?: string;
    positionText: string;
    points: string;
    wins: string;
    Constructor: ConstructorApiData;
}

export interface DateTimeApiData {
    date?: string;
    time?: string;
}

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

export interface DriverStandingApiData {
    position?: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: DriverApiData;
    Constructors: ConstructorApiData[];
}

export interface FastestLapApiData {
    rank: string;
    lap: string;
    Time: FastestLapTimeApiData;
    AverageSpeed?: AverageSpeedApiData;
}

export interface FastestLapTimeApiData {
    time: string;
}

export interface FinishingTimeApiData {
    millis: string;
    time: string;
}

export interface LapApiData {
    number: string;
    Timings: TimingApiData[];
}

export interface LocationApiData {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

export interface PitStopApiData {
    driverId: string;
    lap?: string;
    stop?: string;
    time?: string;
    duration?: string;
}

export interface QualifyingResultApiData {
    number: string;
    position?: string;
    Driver: DriverApiData;
    Constructor: ConstructorApiData;
    Q1?: string;
    Q2?: string;
    Q3?: string;
}

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

export interface SeasonApiData {
    season: string;
    url: string;
}

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

export interface StatusApiData {
    statusId: StatusType;
    count: string;
    status: string;
}

export interface TimingApiData {
    driverId: string;
    position: string;
    time: string;
}

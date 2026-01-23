import type {
    CarDataApiData,
    DriverApiData,
    DriverChampionshipApiData,
    IntervalApiData,
    LapApiData,
    LocationApiData,
    MeetingApiData,
    OvertakeApiData,
    PitApiData,
    PositionApiData,
    RaceControlApiData,
    SessionApiData,
    SessionResultApiData,
    StartingGridApiData,
    StintApiData,
    TeamChampionshipApiData,
    TeamRadioApiData,
    WeatherApiData,
} from './data';

export type * from './data';

export interface EndpointsMap {
    car_data: CarDataApiData;
    championship_drivers: DriverChampionshipApiData;
    championship_teams: TeamChampionshipApiData;
    drivers: DriverApiData;
    intervals: IntervalApiData;
    laps: LapApiData;
    location: LocationApiData;
    meetings: MeetingApiData;
    overtakes: OvertakeApiData;
    pit: PitApiData;
    position: PositionApiData;
    race_control: RaceControlApiData;
    sessions: SessionApiData;
    session_result: SessionResultApiData;
    starting_grid: StartingGridApiData;
    stints: StintApiData;
    team_radio: TeamRadioApiData;
    weather: WeatherApiData;
}

export type WhereOperator = '=' | '>=' | '<=';

export interface WhereClause<T = unknown> {
    field: string;
    operator: WhereOperator;
    value: T;
}

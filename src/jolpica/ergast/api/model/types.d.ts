import type { ValueOf } from '../../../../types/helpers';
import type {
    Circuit,
    Driver,
    DriverStanding,
    Lap,
    PitStop,
    QualifyingResult,
    Race,
    Result,
    Season,
    SprintResult,
    Status,
    Team,
    TeamStanding,
} from './models';

export interface Response<T> {
    meta: {
        limit: number;
        offset: number;
        total: number;
    };
    data: T;
}

export interface ModelsMap {
    circuits: Circuit;
    constructorstandings: TeamStanding;
    constructors: Team;
    driverstandings: DriverStanding;
    drivers: Driver;
    laps: Lap;
    pitstops: PitStop;
    qualifying: QualifyingResult;
    races: Race;
    results: Result;
    seasons: Season;
    sprint: SprintResult;
    status: Status;
}

export type AnyModel = ValueOf<ModelsMap>;

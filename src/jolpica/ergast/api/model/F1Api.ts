import type {
    CircuitOptions,
    DriverOptions,
    DriverStandingOptions,
    LapOptions,
    QualifyingResultOptions,
    RaceOptions,
    ResultOptions,
    SeasonOptions,
    SprintResultOptions,
    StatusOptions,
    TeamOptions,
    TeamStandingOptions,
} from '../../types';
import { ErgastBaseApi } from '../ErgastBaseApi';
import {
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
import { PendingRequest } from './PendingRequest';

export class F1Api extends ErgastBaseApi {
    public circuits(options?: CircuitOptions): PendingRequest<Circuit[]> {
        return new PendingRequest(
            this,
            'circuits',
            options ?? {},
            (data) =>
                data.CircuitTable.Circuits.map((circuitData) => new Circuit(circuitData, this)),
        );
    }

    public driverStandings(options: DriverStandingOptions): PendingRequest<DriverStanding[]> {
        return new PendingRequest(
            this,
            'driverstandings',
            options,
            (data) =>
                data.StandingsTable.StandingsLists.flatMap((standingsList) =>
                    standingsList.DriverStandings.map((standingsData) =>
                        new DriverStanding(
                            standingsData,
                            standingsList.season,
                            standingsList.round,
                            this,
                        )
                    )
                ),
        );
    }

    public drivers(options?: DriverOptions): PendingRequest<Driver[]> {
        return new PendingRequest(
            this,
            'drivers',
            options ?? {},
            (data) => data.DriverTable.Drivers.map((driverData) => new Driver(driverData, this)),
        );
    }

    public laps(options: LapOptions): PendingRequest<Lap[]> {
        return new PendingRequest(
            this,
            'laps',
            options,
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.Laps.map((lapData) => new Lap(lapData, raceData, this))
                ),
        );
    }

    public pitStops(options: LapOptions): PendingRequest<PitStop[]> {
        return new PendingRequest(
            this,
            'pitstops',
            options,
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.PitStops.map((pitStopData) => new PitStop(pitStopData, raceData, this))
                ),
        );
    }

    public qualifyingResults(
        options?: QualifyingResultOptions,
    ): PendingRequest<QualifyingResult[]> {
        return new PendingRequest(
            this,
            'qualifying',
            options ?? {},
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.QualifyingResults.map((resultData) =>
                        new QualifyingResult(resultData, raceData, this)
                    )
                ),
        );
    }

    public races(options?: RaceOptions): PendingRequest<Race[]> {
        return new PendingRequest(
            this,
            'races',
            options ?? {},
            (data) => data.RaceTable.Races.map((raceData) => new Race(raceData, this)),
        );
    }

    public results(options?: ResultOptions): PendingRequest<Result[]> {
        return new PendingRequest(
            this,
            'results',
            options ?? {},
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.Results.map((resultData) => new Result(resultData, raceData, this))
                ),
        );
    }

    public seasons(options?: SeasonOptions): PendingRequest<Season[]> {
        return new PendingRequest(
            this,
            'seasons',
            options ?? {},
            (data) => data.SeasonTable.Seasons.map((seasonData) => new Season(seasonData, this)),
        );
    }

    public sprintResults(options?: SprintResultOptions): PendingRequest<SprintResult[]> {
        return new PendingRequest(
            this,
            'sprint',
            options ?? {},
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.SprintResults.map((resultData) =>
                        new SprintResult(resultData, raceData, this)
                    )
                ),
        );
    }

    public statuses(options?: StatusOptions): PendingRequest<Status[]> {
        return new PendingRequest(
            this,
            'status',
            options ?? {},
            (data) => data.StatusTable.Status.map((statusData) => new Status(statusData, this)),
        );
    }

    public teamStandings(options: TeamStandingOptions): PendingRequest<TeamStanding[]> {
        return new PendingRequest(
            this,
            'constructorstandings',
            options,
            (data) =>
                data.StandingsTable.StandingsLists.flatMap((standingsList) =>
                    standingsList.ConstructorStandings.map((standingsData) =>
                        new TeamStanding(
                            standingsData,
                            standingsList.season,
                            standingsList.round,
                            this,
                        )
                    )
                ),
        );
    }

    public teams(options?: TeamOptions): PendingRequest<Team[]> {
        return new PendingRequest(
            this,
            'constructors',
            options ?? {},
            (data) =>
                data.ConstructorTable.Constructors.map((teamData) => new Team(teamData, this)),
        );
    }
}

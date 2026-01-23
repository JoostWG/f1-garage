import { QueryBuilder } from './QueryBuilder';

export class OpenF1Api {
    public carData(): QueryBuilder<'car_data'> {
        return new QueryBuilder('car_data');
    }

    public driversChampionships(): QueryBuilder<'championship_drivers'> {
        return new QueryBuilder('championship_drivers');
    }

    public teamsChampionships(): QueryBuilder<'championship_teams'> {
        return new QueryBuilder('championship_teams');
    }

    public drivers(): QueryBuilder<'drivers'> {
        return new QueryBuilder('drivers');
    }

    public intervals(): QueryBuilder<'intervals'> {
        return new QueryBuilder('intervals');
    }

    public laps(): QueryBuilder<'laps'> {
        return new QueryBuilder('laps');
    }

    public location(): QueryBuilder<'location'> {
        return new QueryBuilder('location');
    }

    public meetings(): QueryBuilder<'meetings'> {
        return new QueryBuilder('meetings');
    }

    public overtakes(): QueryBuilder<'overtakes'> {
        return new QueryBuilder('overtakes');
    }

    public pit(): QueryBuilder<'pit'> {
        return new QueryBuilder('pit');
    }

    public position(): QueryBuilder<'position'> {
        return new QueryBuilder('position');
    }

    public raceControl(): QueryBuilder<'race_control'> {
        return new QueryBuilder('race_control');
    }

    public sessions(): QueryBuilder<'sessions'> {
        return new QueryBuilder('sessions');
    }

    public sessionResult(): QueryBuilder<'session_result'> {
        return new QueryBuilder('session_result');
    }

    public startingGrid(): QueryBuilder<'starting_grid'> {
        return new QueryBuilder('starting_grid');
    }

    public stints(): QueryBuilder<'stints'> {
        return new QueryBuilder('stints');
    }

    public teamRadio(): QueryBuilder<'team_radio'> {
        return new QueryBuilder('team_radio');
    }

    public weather(): QueryBuilder<'weather'> {
        return new QueryBuilder('weather');
    }
}

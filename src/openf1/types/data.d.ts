/**
 * @see https://openf1.org/#car-data
 */
export type DrsStatus =
    /** DRS off */
    | 0
    /** DRS off */
    | 1
    /** Unknown */
    | 2
    /** Unknown */
    | 3
    /** Detected, eligible once in activation zone */
    | 8
    /** Unknown */
    | 9
    /** DRS on */
    | 10
    /** DRS on */
    | 12
    /** DRS on */
    | 14;

/**
 * @see https://openf1.org/#car-data
 */
export interface CarDataApiData {
    brake: number;
    date: string;
    driver_number: number;
    drs: DrsStatus;
    meeting_key: number;
    n_gear: number;
    rpm: number;
    session_key: number;
    speed: number;
    throttle: number;
}

/**
 * @example
 * ```json
 * {
 *     "driver_number": 4,
 *     "meeting_key": 1276,
 *     "points_current": 423,
 *     "points_start": 408,
 *     "position_current": 1,
 *     "position_start": 1,
 *     "session_key": 9839
 * }
 * ```
 *
 * @see https://openf1.org/#drivers-championship-beta
 *
 * @beta
 */
export interface DriverChampionshipApiData {
    driver_number: number;
    meeting_key: number;
    points_current: number;
    points_start: number;
    position_current: number;
    position_start: number;
    session_key: number;
}

/**
 * @see https://openf1.org/#teams-championship-beta
 *
 * @beta
 */
export interface TeamChampionshipApiData {
    meeting_key: number;
    points_current: number;
    points_start: number;
    position_current: number;
    position_start: number;
    session_key: number;
    team_name: string;
}

/**
 * @see https://openf1.org/#drivers
 */
export interface DriverApiData {
    broadcast_name: string;
    country_code: string;
    driver_number: number;
    first_name: string;
    full_name: string;
    headshot_url: string;
    last_name: string;
    meeting_key: number;
    name_acronym: string;
    session_key: number;
    team_colour: string;
    team_name: string;
}

/**
 * @see https://openf1.org/#intervals
 */
export interface IntervalApiData {
    date: string;
    driver_number: number;
    gap_to_leader: number;
    interval: number;
    meeting_key: number;
    session_key: number;
}

/**
 * @see https://openf1.org/#laps
 */
export interface LapApiData {
    date_start: string;
    driver_number: number;
    duration_sector_1: number;
    duration_sector_2: number;
    duration_sector_3: number;
    i1_speed: number;
    i2_speed: number;
    is_pit_out_lap: boolean;
    lap_duration: number;
    lap_number: number;
    meeting_key: number;
    segments_sector_1: number[];
    segments_sector_2: number[];
    segments_sector_3: number[];
    session_key: number;
    st_speed: number;
}

/**
 * @see https://openf1.org/#location
 */
export interface LocationApiData {
    date: string;
    driver_number: number;
    meeting_key: number;
    session_key: number;
    x: number;
    y: number;
    z: number;
}

/**
 * @see https://openf1.org/#meetings
 */
export interface MeetingApiData {
    circuit_key: number;
    circuit_image: string;
    circuit_short_name: string;
    circuit_type: string;
    country_code: string;
    country_flag: string;
    country_key: number;
    country_name: string;
    date_end: string;
    date_start: string;
    gmt_offset: string;
    location: string;
    meeting_key: number;
    meeting_name: string;
    meeting_official_name: string;
    year: number;
}

/**
 * @see https://openf1.org/#overtakes
 */
export interface OvertakeApiData {
    date: string;
    meeting_key: number;
    overtaken_driver_number: number;
    overtaking_driver_number: number;
    position: number;
    session_key: number;
}

/**
 * @see https://openf1.org/#pit
 */
export interface PitApiData {
    date: string;
    driver_number: number;
    lane_duration: number;
    lap_number: number;
    meeting_key: number;
    /**
     * Same as {@link PitApiData.lane_duration | `PitApiData.lane_duration`}
     *
     * @deprecated This field will be removed at the end of the 2026 season.
     */
    pit_duration: number;
    session_key: number;
    stop_duration: number;
}

/**
 * @see https://openf1.org/#position
 */
export interface PositionApiData {
    date: string;
    driver_number: number;
    meeting_key: number;
    position: number;
    session_key: number;
}

/**
 * @see https://openf1.org/#race-control
 */
export interface RaceControlApiData {
    category: string;
    date: string;
    driver_number: number;
    flag: string;
    lap_number: number;
    meeting_key: number;
    message: string;
    scope: string;
    sector: number | null;
    session_key: number;
}

/**
 * @see https://openf1.org/#sessions
 */
export interface SessionApiData {
    circuit_key: number;
    circuit_short_name: string;
    country_code: string;
    country_key: number;
    country_name: string;
    date_end: string;
    date_start: string;
    gmt_offset: string;
    location: string;
    meeting_key: number;
    session_key: number;
    session_name: string;
    session_type: string;
    year: number;
}

/**
 * @see https://openf1.org/#session-result
 */
export interface SessionResultApiData {
    dnf: boolean;
    dns: boolean;
    dsq: boolean;
    driver_number: number;
    duration: number;
    gap_to_leader: number;
    number_of_laps: number;
    meeting_key: number;
    position: number;
    session_key: number;
}

/**
 * @see https://openf1.org/#starting-grid
 */
export interface StartingGridApiData {
    position: number;
    driver_number: number;
    lap_duration: number;
    meeting_key: number;
    session_key: number;
}

/**
 * @see https://openf1.org/#stints
 */
export interface StintApiData {
    compound: string;
    driver_number: number;
    lap_end: number;
    lap_start: number;
    meeting_key: number;
    session_key: number;
    stint_number: number;
    tyre_age_at_start: number;
}

/**
 * @see https://openf1.org/#team-radio
 */
export interface TeamRadioApiData {
    date: string;
    driver_number: number;
    meeting_key: number;
    recording_url: string;
    session_key: number;
}

/**
 * @see https://openf1.org/#weather
 */
export interface WeatherApiData {
    air_temperature: number;
    date: string;
    humidity: number;
    meeting_key: number;
    pressure: number;
    rainfall: number;
    session_key: number;
    track_temperature: number;
    wind_direction: number;
    wind_speed: number;
}

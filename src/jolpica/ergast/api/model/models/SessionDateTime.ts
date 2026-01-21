import type { DateTimeApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';

export interface SessionDateTimeJSON {
    date: string | null;
    time: string | null;
}

export class SessionDateTime extends Model {
    /**
     * The date this session was held
     */
    public readonly date: string | null;
    /**
     * The time the session started
     */
    public readonly time: string | null;

    public constructor(data: DateTimeApiData, http: F1Api) {
        super(http);

        this.date = data.date ?? null;
        this.time = data.time ?? null;
    }

    public override toJSON(): SessionDateTimeJSON {
        return {
            date: this.date,
            time: this.time,
        };
    }
}

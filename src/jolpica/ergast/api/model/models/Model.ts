import type { F1Api } from '../F1Api';

export abstract class Model {
    public constructor(protected readonly http: F1Api) {
        //
    }

    public abstract toJSON(): unknown;
}

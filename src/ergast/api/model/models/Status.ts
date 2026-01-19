import type { StatusType } from '../../../enums';
import type { StatusApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';

export class Status extends Model {
    public readonly id: StatusType;
    public readonly count: number;
    public readonly name: string;

    public constructor(data: StatusApiData, http: F1Api) {
        super(http);

        this.id = data.statusId;
        this.count = Number(data.count);
        this.name = data.status;
    }
}

import type { MapValueToResource } from '../../../../types/helpers';
import type { OptionsMap, Pagination, ResponsesMap } from '../../types';
import type { ErgastBaseApi } from '../ErgastBaseApi';
import { ErgastBasePendingRequest } from '../ErgastBasePendingRequest';
import type { AnyModel, ModelsMap, Response } from './types';

export class PendingRequest<
    T extends AnyModel[],
    Resource extends MapValueToResource<ModelsMap, T[number]> = MapValueToResource<
        ModelsMap,
        T[number]
    >,
> extends ErgastBasePendingRequest<Resource> {
    public constructor(
        http: ErgastBaseApi,
        resource: Resource,
        options: OptionsMap[Resource],
        protected readonly transform: (data: ResponsesMap[Resource]['MRData']) => T,
    ) {
        super(http, resource, options);
    }

    public async get(pagination?: Pagination): Promise<Response<T>> {
        return await this.fetch(pagination).then(({ MRData }) => ({
            meta: {
                limit: Number(MRData.limit),
                offset: Number(MRData.offset),
                total: Number(MRData.total),
            },
            data: this.transform(MRData),
        }));
    }
}

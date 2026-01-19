import type { MapValueToResource } from '../../../types/helpers';
import type { AnyResponse, Pagination, ResponsesMap } from '../../types';
import { ErgastBasePendingRequest } from '../ErgastBasePendingRequest';

export class PendingRawRequest<TResponse extends AnyResponse>
    extends ErgastBasePendingRequest<MapValueToResource<ResponsesMap, TResponse>>
{
    public async get(pagination?: Pagination): Promise<TResponse['MRData']> {
        return await this.fetch(pagination).then((response) => response.MRData);
    }
}

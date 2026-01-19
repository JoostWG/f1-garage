import type { AnyResponse, Pagination, ResponseResource } from '../../types';
import { ErgastBasePendingRequest } from '../ErgastBasePendingRequest';

export class PendingRawRequest<TResponse extends AnyResponse>
    extends ErgastBasePendingRequest<ResponseResource<TResponse>>
{
    public async get(pagination?: Pagination): Promise<TResponse['MRData']> {
        return await this.fetch(pagination).then((response) => response.MRData);
    }
}

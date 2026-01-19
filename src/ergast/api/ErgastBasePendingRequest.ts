import type { OptionsMap, Pagination, ResponsesMap } from '../types';
import type { ErgastBaseApi } from './ErgastBaseApi';

export class ErgastBasePendingRequest<
    Resource extends keyof ResponsesMap,
> {
    public constructor(
        protected readonly http: ErgastBaseApi,
        public readonly resource: Resource,
        public readonly options: OptionsMap[Resource],
    ) {
        //
    }

    public get url(): string {
        return this.http.baseUrl + this.getPath();
    }

    protected async fetch(pagination?: Pagination): Promise<ResponsesMap[Resource]> {
        return await this.http.get<ResponsesMap[Resource]>(this.getPath(), pagination);
    }

    protected getPath(): string {
        return this.http.getPath(this.resource, this.options);
    }
}

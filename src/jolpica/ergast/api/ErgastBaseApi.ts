import axios, {
    AxiosHeaders,
    type AxiosInstance,
    type AxiosRequestConfig,
    type AxiosResponse,
} from 'axios';
import { BadRequest, HttpError, NotFound } from '../errors';
import type { AnyApiOptions, BadRequestResponse, Pagination, SuccessResponse } from '../types';

export class ErgastBaseApi {
    public readonly baseUrl: string;
    protected readonly http: AxiosInstance;

    public constructor() {
        this.baseUrl = 'https://api.jolpi.ca/ergast/f1';

        this.http = axios.create({
            baseURL: this.baseUrl,
            validateStatus: (status) =>
                (status >= 200 && status <= 299) || (status >= 400 && status <= 499),
            headers: new AxiosHeaders().setAccept('application/json'),
        });
    }

    public getPath(resource: string, options: AnyApiOptions): string {
        const basePath = `/${resource}`;

        const path: string[] = [];

        if (options.season) {
            path.push(String(options.season));

            if (options.round) {
                path.push(String(options.round));
            }
        }

        if (options.circuit) {
            path.push('circuits', options.circuit);
        }

        if (options.driver) {
            path.push('drivers', options.driver);
        }

        if (options.team) {
            path.push('constructors', options.team);
        }

        if (options.lap) {
            path.push('laps', String(options.lap));
        }

        if (options.pitStopNumber) {
            path.push('pitstops', String(options.pitStopNumber));
        }

        if (options.fastestRank) {
            path.push('fastest', String(options.fastestRank));
        }

        if (options.gridPosition) {
            path.push('grid', String(options.gridPosition));
        }

        if (options.finishPosition) {
            path.push('results', String(options.finishPosition));
        }

        if (options.status) {
            path.push('status', options.status);
        }

        if (options.driverStanding) {
            path.push('driverstandings', String(options.driverStanding));
        }

        if (options.qualifying) {
            path.push('qualifying', String(options.qualifying));
        }

        if (options.teamStanding) {
            path.push('constructorstandings', String(options.teamStanding));
        }

        if (path.length === 0) {
            return basePath;
        }

        return `/${path.join('/')}${basePath}`;
    }

    public async get<T extends SuccessResponse>(
        path: string,
        pagination?: Pagination,
        config?: AxiosRequestConfig,
    ): Promise<T> {
        const response = await this.http.get<T | BadRequestResponse>(`${path}.json`, {
            ...config,
            params: {
                ...pagination,
                ...config?.params,
            },
        });

        if (response.status === 404) {
            throw new NotFound(response);
        }

        if (this.responseIsBadRequest(response)) {
            throw new BadRequest(response.data.detail);
        }

        if (response.status !== 200) {
            throw new HttpError(response.status);
        }

        return response.data as T;
    }

    protected responseIsBadRequest(
        response: AxiosResponse,
    ): response is AxiosResponse<BadRequestResponse> {
        return response.status === 400;
    }
}

import axios, { type AxiosInstance } from 'axios';
import type { EndpointsMap, WhereClause, WhereOperator } from './types';

export class QueryBuilder<
    E extends keyof EndpointsMap,
    T extends EndpointsMap[E] = EndpointsMap[E],
> {
    protected wheres: WhereClause[];
    protected readonly http: AxiosInstance;

    public constructor(protected readonly endpoint: E) {
        this.wheres = [];

        this.http = axios.create({
            baseURL: 'https://api.openf1.org/v1',
        });
    }

    public where<K extends Extract<keyof T, string>>(field: K, value: T[K]): this;
    public where<K extends Extract<keyof T, string>>(
        field: K,
        operator: WhereOperator,
        value: T[K],
    ): this;
    public where(wheres: Partial<T>): this;
    public where<K extends Extract<keyof T, string>>(
        fieldOrWheres: K | Partial<T>,
        valueOrOperator?: T[K] | WhereOperator,
        maybeValue?: T[K],
    ): this {
        if (!valueOrOperator || typeof fieldOrWheres !== 'string') {
            for (const [field, value] of Object.entries(fieldOrWheres)) {
                this.wheres.push({ field, operator: '=', value });
            }

            return this;
        }

        if (!maybeValue) {
            this.wheres.push({ field: fieldOrWheres, operator: '=', value: valueOrOperator });

            return this;
        }

        if (valueOrOperator === '=' || valueOrOperator === '<=' || valueOrOperator === '>=') {
            this.wheres.push({
                field: fieldOrWheres,
                // @ts-expect-error TS is dumb
                operator: valueOrOperator,
                value: maybeValue,
            });

            return this;
        }

        throw new Error('Invalid where');
    }

    public async get(): Promise<T[]> {
        const response = await this.http.get<T[]>(`/${this.endpoint}`, {
            params: this.parameters(),
        });

        return response.data;
    }

    protected parameters(): Record<string, string> {
        return Object.fromEntries(
            this.wheres.map((where) => [this.getParamName(where), String(where.value)]),
        );
    }

    protected getParamName(where: WhereClause): string {
        if (where.operator === '>=') {
            return `${where.field}>`;
        }

        if (where.operator === '<=') {
            return `${where.field}<`;
        }

        return where.field;
    }
}

export type * from './data';
export type * from './responses';

export interface Pagination {
    /**
     * Maximum number of results results returned. Defaults to 30. Max is 100
     */
    limit?: number;
    /**
     * Allows you to offset the results by the specified number for pagination. Defaults to 0.
     */
    offset?: number;
}

/**
 * The root object of the json response.
 *
 * @see https://github.com/jolpica/jolpica-f1/tree/main/docs#common-response-fields
 */
export interface MRData {
    /**
     * Blank, provided for compatibility with legacy ergast API.
     */
    xmlns: '';
    /**
     * The racing series of the results (always f1).
     */
    series: 'f1';
    /**
     * The API URL that the returned data was retrieved from (without query parameters).
     */
    url: string;
    /**
     * The limit used for this call. May be different from the query parameter set in some cases.
     */
    limit: `${number}`;
    /**
     * The result offset of this call.
     */
    offset: `${number}`;
    /**
     * The total number of items available from the endpoint.
     */
    total: `${number}`;
}

export interface SuccessResponse<T = unknown> {
    MRData: MRData & T;
}

export interface BadRequestResponse {
    detail: string;
}

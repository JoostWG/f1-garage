// This file is not exported in index.d.ts

/**
 * @internal
 */
export type ValueOf<T> = T[keyof T];

/**
 * @internal
 */
export type Exact<T, U> = T extends U ? (U extends T ? true : false) : false;

/**
 * @internal
 */
export type MapValueToResource<M, V extends ValueOf<M>> = {
    [K in keyof M]: Exact<M[K], V> extends true ? K : never;
}[keyof M];

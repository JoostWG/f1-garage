import type { AxiosResponse } from 'axios';
import { HttpError } from './HttpError';

/**
 * @category Errors
 *
 * @since 1.0.1
 */
export class NotFound extends HttpError {
    public constructor(
        /**
         * @since 1.1.0
         */
        public readonly response: AxiosResponse,
        message?: string,
    ) {
        super(404, message);
    }
}

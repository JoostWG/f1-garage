import { HttpError } from './HttpError';

/**
 * @category Errors
 *
 * @since 1.0.1
 */
export class BadRequest extends HttpError {
    public constructor(public readonly detail: string) {
        super(400, detail);
    }
}

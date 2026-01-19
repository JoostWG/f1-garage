import { JolpicaError } from '../../errors/JolpicaError';

/**
 * @category Errors
 *
 * @since 1.0.1
 */
export class HttpError extends JolpicaError {
    public constructor(public readonly status: number, message?: string) {
        super(message);
    }
}

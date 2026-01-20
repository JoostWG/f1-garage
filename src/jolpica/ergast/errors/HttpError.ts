import { JolpicaError } from '../../errors/JolpicaError';

export class HttpError extends JolpicaError {
    public constructor(public readonly status: number, message?: string) {
        super(message);
    }
}

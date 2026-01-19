import type { AxiosResponse } from 'axios';
import { HttpError } from './HttpError';

export class NotFound extends HttpError {
    public constructor(public readonly response: AxiosResponse, message?: string) {
        super(404, message);
    }
}

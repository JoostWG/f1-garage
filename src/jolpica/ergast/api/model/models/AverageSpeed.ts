import type { AverageSpeedApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';

export interface AverageSpeedJSON {
    units: string;
    speed: number;
}

export class AverageSpeed extends Model {
    /**
     * The units the speed was measured in
     */
    public readonly units: string;
    /**
     * The average speed
     */
    public readonly speed: number;

    public constructor(data: AverageSpeedApiData, http: F1Api) {
        super(http);

        this.units = data.units;
        this.speed = Number(data.speed);
    }

    /**
     * The average speed in kilometers per hour
     */
    public get kph(): number {
        if (this.units === 'kph') {
            return this.speed;
        }

        throw new Error('Invalid speed unit');
    }

    /**
     * The average speed in miles per hour
     */
    public get mph(): number {
        return this.kph * 0.621371192;
    }

    public override toJSON(): AverageSpeedJSON {
        return {
            units: this.units,
            speed: this.speed,
        };
    }
}

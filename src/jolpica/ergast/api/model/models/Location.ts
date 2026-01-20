import type { LocationApiData } from '../../../types';
import type { F1Api } from '../F1Api';
import { Model } from './Model';

export class Location extends Model {
    public readonly latitude: number;
    public readonly longitude: number;
    public readonly locality: string;
    public readonly country: string;

    public constructor(data: LocationApiData, http: F1Api) {
        super(http);

        this.latitude = Number(data.lat);
        this.longitude = Number(data.long);
        this.locality = data.locality;
        this.country = data.country;
    }

    public openStreetMapUrl(
        zoomLevel = 15,
    ): `https://www.openstreetmap.org/#map=${number}/${number}/${number}` {
        return `https://www.openstreetmap.org/#map=${zoomLevel}/${this.latitude}/${this.longitude}`;
    }

    public googleMapsUrl(
        scale = 5000,
    ): `https://www.google.com/maps/@${number},${number},${number}m` {
        return `https://www.google.com/maps/@${this.latitude},${this.longitude},${scale}m`;
    }

    public appleMapsUrl(
        span = [0.03, 0.06],
    ): `https://maps.apple.com/frame?center=${number}%2C${number}&span=${number}%2C${number}` {
        // dprint-ignore
        return `https://maps.apple.com/frame?center=${this.latitude}%2C${this.longitude}&span=${span[0]}%2C${span[1]}`;
    }
}

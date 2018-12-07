import { Injectable } from "@angular/core";
import * as Maps from '@google/maps';
import { Observable } from "rxjs";

const googleMapsClient = Maps.createClient({
    key: process.env.API_KEY,
    Promise: Promise,
});

@Injectable()
export class MapService {

    public encode(address: string): Observable<Object> {
        return Observable.from(new Promise((resolve, reject) => {
            googleMapsClient.geocode({ address })
                .asPromise()
                .then((response) => {
                    resolve(response);
                    console.log('encoded value', response);
                })
                .catch((err) => {
                    reject(reject);
                });
        }));
    }
}
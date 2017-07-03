import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VehicleService {

    constructor(private _http: Http) { }

     getMakes() {
        return this._http.get('/api/makes')
            .map(res => res.json());
    }

     getFeatures() {
        return this._http.get('/api/features')
            .map(res => res.json());
    }
    
}
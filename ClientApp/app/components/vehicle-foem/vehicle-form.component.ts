import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-vehicle-form',
    templateUrl: 'vehicle-form.component.html',
    styleUrls: ['./vehicle-form.component.css']
})

export class VehicleFormComponent implements OnInit {

    private makes: any[];
    private models: any[];
    private features: any[];
    private vehicle: any = {};

    constructor(private _vehicleService: VehicleService) { }

    ngOnInit() { 
        this._vehicleService.getMakes().subscribe(makes => {
            this.makes = makes;
        });

        this._vehicleService.getFeatures().subscribe(features => {
            this.features = features;
        })
    }

    onMakeChange() {
        var selectedMake = this.makes.find(m => m.id == this.vehicle.make);
        this.models = selectedMake ? selectedMake.models : [];
    }
}
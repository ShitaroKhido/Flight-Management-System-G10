import { Airport } from "../Airport/Airport";

export class FlightRoute{
    private arrivalDestination: Airport;
    private landingLocations: Airport[] = [];

    constructor(arrivalDestination: Airport){
        this.arrivalDestination = arrivalDestination;
    }
}

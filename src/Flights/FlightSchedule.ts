import { Airport } from "../Airport/Airport";

export class FlightRoute{
    private arrivalDestination: Airport;

    constructor(arrivalDestination: Airport){
        this.arrivalDestination = arrivalDestination;
    }
}
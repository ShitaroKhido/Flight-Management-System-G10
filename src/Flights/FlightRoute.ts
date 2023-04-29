import { Airport } from "../Airport/Airport";
import { FlightSchedule } from "./FlightSchedule";

export class FlightRoute {
    private landingLocations: Airport[] = [];
    private flgihtSchedule : FlightSchedule[]= [];

    constructor(private arrivalDestination: Airport) {
    }

    getarrivalDestination() {
        return this.arrivalDestination;
    }

    addLandingLocation(landingLocations: Airport) {
        this.landingLocations.push(landingLocations);
    }

    updateArrivalDestination(arrivalDestination: Airport) {
        this.arrivalDestination = arrivalDestination;
    }

    addFlightSchedule(flightSchedule: FlightSchedule){
        this.flgihtSchedule.push(flightSchedule);
    }

    getFlgithSchedules(){
        return this.flgihtSchedule;
    }

}

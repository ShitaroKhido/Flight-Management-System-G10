import { Airport } from "../Airport/Airport";

export class FlightRoute {
    private landingLocations: Airport[] = [];

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
}

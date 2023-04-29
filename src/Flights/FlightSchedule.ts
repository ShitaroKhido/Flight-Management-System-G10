import { Flight } from "./Flight";
import { FlightRoute } from "./FlightRoute";
export class FlightSchedule {
    private flights: Flight[] = [];

    constructor(private departureTime: Date, private arrivalTime: Date) {
    }

    addFlight(flight: Flight) {
        this.flights.push(flight);
    }

    getFlight(): Flight[] {
        return this.flights;
    }

    getScheduleInfo() {
        return { departure: this.departureTime, arrival: this.arrivalTime };
    }

}



import { FlightType } from "../Enums/FlightType";
import { Flight } from "./Flight";

export class FlightSchedule {
  private flights: Flight[] = [];
  constructor(private departureTime: Date, private arrivalTime: Date) {}

  scheduleInfo() {
    return {
      depart: this.departureTime,
      arrive: this.arrivalTime,
    };
  }

  assignFlight(flightType: FlightType) {
    this.flights.push(new Flight(flightType));
  }
}

import { Flight } from "./Flight";
export class FlightSchedule {
  private flights: Flight[] = [];

  constructor(private departureTime: Date, private arrivalTime: Date) {}

  addFlight(flight: Flight) {
    this.flights.push(flight);
  }

  getFlight(): Flight[] {
    return this.flights;
  }

  getScheduleInfo() {
    return {
      departure: this.departureTime,
      arrival: this.arrivalTime,
      availableFlight: this.flights,
    };
  }
  selectFlight(index: number) {
    return this.getScheduleInfo().availableFlight[index];
  }
}

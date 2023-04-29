import { Airport } from "../Airport/Airport";
import { FlightSchedule } from "./FlightSchedule";

export class FlightRoute {
  private landingLocations: Airport[] = [];
  private schedules: FlightSchedule[] = [];

  constructor(private arrivalDestination: Airport) {}

  getarrivalDestination() {
    return this.arrivalDestination;
  }

  addLandingLocation(landingLocations: Airport) {
    this.landingLocations.push(landingLocations);
  }

  updateArrivalDestination(arrivalDestination: Airport) {
    this.arrivalDestination = arrivalDestination;
  }

  getSchedule(departureDate: Date): FlightSchedule | undefined {
    let matchedSchedule = undefined;
    this.schedules.forEach((schedule) => {
      if (schedule.getScheduleInfo().departure === departureDate) {
        matchedSchedule = schedule;
      }
    });
    return matchedSchedule;
  }
  addSchedules(depart: Date, arrive: Date) {
    return this.schedules.push(new FlightSchedule(depart, arrive));
  }
}

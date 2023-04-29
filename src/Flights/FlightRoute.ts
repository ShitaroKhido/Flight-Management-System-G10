import { Airport } from "../Airport/Airport";
import { FlightSchedule } from "./FlightSchedule";

export class FlightRoute {
  private schedules: FlightSchedule[] = [];
  constructor(
    private detpartureDestination: Airport,
    private arrivalDestination: Airport
  ) {}

  routeInfo() {
    return {
      departFrom: this.arrivalDestination,
      arriveAt: this.arrivalDestination,
    };
  }

  addFlightSchedule(derpartureTime: Date, arrivalTime: Date) {
    this.schedules.push(new FlightSchedule(derpartureTime, arrivalTime));
  }

  getFlightSchedules() {
    return this.schedules;
  }

  getFlightSchedule(departTime: Date): FlightSchedule | undefined {
    let matchedSchedule = undefined;
    this.schedules.forEach((sched) => {
      if (sched.scheduleInfo().depart === departTime) {
        matchedSchedule = sched;
      }
    });
    return matchedSchedule;
  }
}

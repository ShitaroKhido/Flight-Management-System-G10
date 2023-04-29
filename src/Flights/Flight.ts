import { FlightType } from "../Enums/FlightType";
import { FlightCrew } from "../Peoples/FlightCrew";
import { Passenger } from "../Peoples/Passenger";
import { Plane } from "../Plane/Plane";

export class Flight {
  private flightCrew: FlightCrew | undefined;
  private plane: Plane | undefined;

  constructor(private flightType: FlightType = FlightType.OneWay) {}

  assignPlane(plane: Plane) {
    this.plane = plane;
  }

  assignFlightcrew(flightCrew: FlightCrew) {
    this.flightCrew = flightCrew;
  }

  addPassenger(seatNumber: string, passenger: Passenger) {
    if (this.plane !== undefined) {
      this.plane.assignPassengerSeat(seatNumber, passenger);
    }
  }
}

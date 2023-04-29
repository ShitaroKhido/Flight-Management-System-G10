import { FlightType } from "../Enums/FlightType";
import { FlightCrew } from "../Peoples/FlightCrew";
import { Plane } from "../Plane/Plane";
export class Flight {
  private plane: Plane | undefined;
  private flightCrew: FlightCrew | undefined;
  constructor(private flightType: FlightType) {}

  private getPlaneSerialNumber() {
    return this.plane?.getSerialNumber();
  }
  assignPlane(plane: Plane) {
    this.plane = plane;
  }
  unassignPlane() {
    this.plane = undefined;
  }
  assignFlightCrew(flightCrew: FlightCrew) {
    this.flightCrew = flightCrew;
  }
  unassignFlightCrew() {
    this.flightCrew = undefined;
  }
  flightInfo() {
    return {
      plane: this.plane,
      planeNumber: this.getPlaneSerialNumber(),
      flightCrew: this.flightCrew,
    };
  }
}

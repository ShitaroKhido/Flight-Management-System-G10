import { Flight } from "../Flights/Flight";

export class BoardingPass {
  private flight: Flight | undefined;
  constructor(private subReferenceNumber: string, private seatNumber: string) {}

  setFlight(flight: Flight) {
    this.flight = flight;
  }

  getPlaneSerialNumber() {
    return this.flight?.getPlane()?.planeInfo().serial;
  }
}

import { Plane } from "../Plane/Plane";

export class BoardingGate {
  constructor(private gateNumber: number, private dockedPlane?: Plane) {}

  getGateNumber() {
    return this.gateNumber;
  }
  dockPlane(plane: Plane) {
    plane.dockAtGate(this.getGateNumber());
    this.dockedPlane = plane;
  }
  undockPlane(plane: Plane) {
    this.dockedPlane = undefined;
  }
}

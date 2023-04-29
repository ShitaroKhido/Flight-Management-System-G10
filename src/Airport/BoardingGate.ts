import { Plane } from "../Plane/Plane";

export class BoardingGate {
  constructor(private gateNumber: number, private dockedPlane?: Plane) {}
  dockPlane(plane: Plane) {
    this.dockedPlane = plane;
  }
}

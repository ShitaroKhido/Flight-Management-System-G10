import { Plane } from "../Plane/Plane";

export class Airline {
  private planes: Plane[] = [];
  constructor(private name: string) {}

  airlineInfo() {
    return {
      name: this.name,
      planes: this.planes,
    };
  }

  registerPlane(serialNumber: string, numberOfSeat: number) {
    this.planes.push(new Plane(serialNumber, numberOfSeat));
  }
}

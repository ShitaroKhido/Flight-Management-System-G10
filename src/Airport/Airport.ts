import { Airline } from "./Airline";
import { BoardingGate } from "./BoardingGate";

export class Airport {
  private gates: BoardingGate[] = [];
  private airlines: Airline[] = [];

  constructor(
    private name: string,
    private country: string,
    private city: string
  ) {
    this.name = name;
    this.city = city;
    this.country = country;
  }
  assignBoardinGates(gateCount: number) {
    for (let i = 0; i <= gateCount; i++) {
      this.gates.push(new BoardingGate(i + 1));
    }
  }
  registerAirline(airline: Airline) {
    this.airlines.push(airline);
  }

  availableAirline() {
    return this.airlines;
  }
}

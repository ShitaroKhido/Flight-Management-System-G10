import { Plane } from "../Plane/Plane";
import { Airline } from "./Airline";
import { BoardingGate } from "./BoardingGate";

export class Airport {
  private airlines: Airline[] = [];
  private boardingGates: BoardingGate[] = [];
  constructor(
    private name: string,
    private country: string,
    private city: string
  ) {
    this.name = name;
    this.city = city;
    this.country = country;
  }

  airportInfo() {
    return {
      name: this.name,
      city: this.city,
      country: this.country,
      airlines: this.airlines,
      boardingGates: this.boardingGates,
    };
  }

  registerAirline(airline: Airline) {
    this.airlines.push(airline);
  }

  assignGate(amount: number) {
    for (let i = 0; i < amount; ++i) {
      this.boardingGates.push(new BoardingGate(i + 1));
    }
  }

  getAirlines() {
    return this.airlines;
  }
}

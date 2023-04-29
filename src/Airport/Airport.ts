import { Plane } from "../Plane/Plane";
import { Airline } from "./Airline";

export class Airport {
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

  registerAirline(airline: Airline) {
    this.airlines.push(airline);
  }

  getAirlines() {
    return this.airlines;
  }
}

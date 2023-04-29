import { FlightRoute } from "../Flights/FlightRoute";
import { Plane } from "../Plane/Plane";
import { Airport } from "./Airport";

export class Airline {
  private planes: Plane[] = [];
  private availableRoute: FlightRoute[] = [];
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

  addFligthRoute(from: Airport, arrival: Airport) {
    this.availableRoute.push(new FlightRoute(from, arrival));
  }

  getFlightRoute(country: string): FlightRoute | undefined {
    let matchedRoute = undefined;
    this.availableRoute.forEach((route) => {
      if (
        route.routeInfo().arriveAt.airportInfo().country.toLowerCase() ===
        country
      ) {
        matchedRoute = route;
      }
    });
    return matchedRoute;
  }
}

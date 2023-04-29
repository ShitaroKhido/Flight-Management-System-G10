import { FlightType } from "../Enums/FlightType";
import { MealType } from "../Enums/MealType";
import { FlightRoute } from "../Flights/FlightRoute";
import { Passenger } from "../Peoples/Passenger";
import { PlanInfo, Plane } from "../Plane/Plane";
import { Ticket } from "../Tickets/Ticket";
import { Airport } from "./Airport";

export class Airline {
  private aviableRoutes: FlightRoute[] = [];
  private planes: Plane[] = [];

  constructor(private name: string) {
    this.name = name;
  }

  private generatePNR(passenger: Passenger): string {
    return "";
  }

  registerPlane(listOfPlaneInfo: PlanInfo[]) {
    listOfPlaneInfo.forEach((plane) => {
      this.planes.push(new Plane(plane.serialNumber, plane.numberOfSeat));
    });
  }

  getPlanes() {
    return this.planes;
  }

  getPlaneWithSerial(serialNumber: string): Plane | undefined {
    let matchedPlane = undefined;
    this.planes.forEach((plane) => {
      if (plane.getSerialNumber() === serialNumber) {
        matchedPlane = plane;
      }
    });
    return matchedPlane;
  }

  addFlightRoute(destAirport: Airport) {
    this.aviableRoutes.push(new FlightRoute(destAirport));
  }

  availableDestination() {
    return this.aviableRoutes;
  }

  bookingFlight(
    passenger: Passenger,
    destination: string,
    flightType: FlightType,
    mealType: MealType
  ) {
    this.aviableRoutes.forEach((route) => {
      if (route.getarrivalDestination().airportInfo().country === destination) {
        const newTicket = new Ticket(this.generatePNR(passenger));
        passenger.addTicket(newTicket);
        if (flightType === FlightType.OneWay) {
        }
      }
    });
  }
}

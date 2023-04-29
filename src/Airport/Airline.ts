import { Flight } from "../Flights/Flight";
import { FlightRoute } from "../Flights/FlightRoute";
import { Passenger } from "../Peoples/Passenger";
import { Plane } from "../Plane/Plane";
import { Ticket } from "../Tickets/Ticket";
import { Airport } from "./Airport";
import { BoardingGate } from "./BoardingGate";

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

  getPlaneWithSerial(serialNumber: string): Plane | undefined {
    let matchedPlane = undefined;
    this.planes.forEach((plane) => {
      if (
        plane.planeInfo().serial.toLowerCase() === serialNumber.toLowerCase()
      ) {
        matchedPlane = plane;
      }
    });
    return matchedPlane;
  }

  dockPlaneAtGate(gates: BoardingGate, planeSerialNumber: string) {
    const plane = this.getPlaneWithSerial(planeSerialNumber);
    if (plane !== undefined) {
      gates.dockPlane(plane);
    }
  }

  getFlights(
    departureDestination: Airport,
    arrivalDestination: Airport,
    departTime: Date
  ): Flight[] | undefined {
    let flightList = undefined;
    this.availableRoute.forEach((route) => {
      if (
        route.routeInfo().departFrom.airportInfo().country.toLowerCase() ===
          departureDestination.airportInfo().country.toLowerCase() &&
        route.routeInfo().arriveAt.airportInfo().country.toLowerCase() ===
          arrivalDestination.airportInfo().country.toLowerCase()
      ) {
        flightList = route.getFlightSchedule(departTime)?.getFligts();
      }
    });
    return flightList;
  }

  private generateReferenceCode(): string {
    return "";
  }

  private generateTicket(masterReferenceCode: string) {
    return new Ticket(masterReferenceCode);
  }

  bookFlight(
    passenger: Passenger,
    departureDestination: Airport,
    arrivalDestination: Airport,
    departTime: Date,
    selectedSeatNumber: string[],
    lisfOfFlight: number[]
  ) {
    let newTicket = this.generateTicket(this.generateReferenceCode());
    newTicket.generateBoardingPass(selectedSeatNumber);
    lisfOfFlight.forEach((number) => {
      this.getFlights(
        departureDestination,
        arrivalDestination,
        departTime
      )?.forEach((flight, index) => {
        if (number === index) {
          newTicket.getBoardingPasses()[index].setFlight(flight);
        }
      });
    });
    passenger.addTicket(newTicket);
  }
}

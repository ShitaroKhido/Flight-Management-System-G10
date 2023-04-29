import { MealType } from "../Enums/MealType";
import { Flight } from "../Flights/Flight";
import { Passenger } from "../Peoples/Passenger";
import { BoardingPass } from "./BoardingPass";

export class Ticket {
  private boardingTickets: BoardingPass[] = [];

  constructor(
    protected masterReferenceNumber: string,
    protected mealType: MealType
  ) {}

  private generateSubPNR(masterPNR: string): string {
    return "";
  }
  addBoardingTicket(passenger: Passenger, seat: string, flight: Flight) {
    flight.flightInfo().plane?.addPassenger(passenger, seat);
    this.boardingTickets.push(
      new BoardingPass(
        this.generateSubPNR(this.masterReferenceNumber),
        seat,
        flight
      )
    );
  }

  getPassengerMealType() {
    return this.mealType;
  }
}

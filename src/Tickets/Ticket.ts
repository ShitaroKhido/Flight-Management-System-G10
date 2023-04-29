import { Flight } from "../Flights/Flight";
import { BoardingPass } from "./BoardingPass";

export class Ticket {
  private boardingTickets: BoardingPass[] = [];

  constructor(protected masterReferenceNumber: string) {}

  private generateSubPNR(masterPNR: string): string {
    return "";
  }
  addBoardingTicket(seats: string, flight: Flight) {
    return new BoardingPass(
      this.generateSubPNR(this.masterReferenceNumber),
      seats,
      flight
    );
  }
}

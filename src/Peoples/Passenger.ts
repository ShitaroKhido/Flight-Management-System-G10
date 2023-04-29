import { Ticket } from "../Tickets/Ticket";
import { Person } from "./Person";

export class Passenger extends Person {
  private tickets: Ticket[] = [];
  constructor(
    firstName: string,
    lastName: string,
    height: number,
    weight: number
  ) {
    super(firstName, lastName, height, weight);
  }

  addTicket(ticket: Ticket) {
    this.tickets.push(ticket);
  }

  getTickets(): Ticket[] {
    return this.tickets;
  }
}

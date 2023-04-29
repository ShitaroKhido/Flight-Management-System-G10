import { Belonging } from "../Items/Belonging";
import { Meal } from "../Items/Meal";
import { FrequentFlyer } from "../Tickets/FrequentFlyer";
import { Ticket } from "../Tickets/Ticket";
import { Person } from "./Person";

export class Passenger extends Person {
  private belongings: Belonging[] = [];
  private tickets: Ticket[] = [];
  private flyerPoints: FrequentFlyer = new FrequentFlyer(0, 0);

  constructor(
    firstName: string,
    lastName: string,
    height: number,
    weight: number
  ) {
    super(firstName, lastName, height, weight);
  }

  addBelonging(belonging: Belonging) {
    this.belongings.push(belonging);
  }

  getBelonging() {
    return this.belongings;
  }

  addTicket(tickets: Ticket) {
    this.tickets.push(tickets);
  }

  getTickets(): Ticket[] {
    return this.tickets;
  }
}

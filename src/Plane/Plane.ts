import { Belonging } from "../Items/Belonging";
import { Meal } from "../Items/Meal";
import { Passenger } from "../Peoples/Passenger";
import { Seat } from "./Seat";

export type PlanInfo = { serialNumber: string; numberOfSeat: number };

export class Plane {
  private seats: Seat[] = [];
  private mealLoadout: Meal[] = [];
  private planeCargo: Belonging[] = [];
  private gateNumber: number | undefined;

  constructor(private serialNumber: string, private numberOfSeat: number) {
    this.generateSeats(numberOfSeat);
  }
  private generateSeats(numberOfSeat: number) {
    let seatLetter: string[] = ["A", "B", "C", "D"];
    let seatNumber: string = "";
    for (let i = 0; i <= numberOfSeat; i++) {
      if (i <= 30) {
        seatNumber = `${seatLetter[0]}${i}`;
      } else if (i <= 60) {
        seatNumber = `${seatLetter[1]}${i}`;
      } else if (i <= 120) {
        seatNumber = `${seatLetter[2]}${i}`;
      } else {
        seatNumber = `${seatLetter[3]}${i}`;
      }
      this.seats.push(new Seat(seatNumber));
    }
  }

  getSerialNumber() {
    return this.serialNumber;
  }

  dockAtGate(gateNumber: number) {
    this.gateNumber;
  }

  addPassenger(passenger: Passenger, seatNumber: string) {
    this.seats.forEach((seat) => {
      if (seat.getSeatNumber() === seatNumber) {
        seat.assignSeat(passenger);
      }
    });
  }

  loadItem() {
    this.seats.forEach((seat) => {
      seat
        .passengerStatus()
        .passenger?.getTickets()
        .forEach((ticket) => {
          this.mealLoadout.push(
            new Meal("Food", 0.5, ticket.getPassengerMealType())
          );
        });
      if (seat.passengerStatus().status === true) {
        seat
          .passengerStatus()
          .passenger?.getBelonging()
          .forEach((item) => {
            this.planeCargo.push(item);
          });
      }
    });
  }
}

import { Passenger } from "../Peoples/Passenger";
import { Seat } from "./Seat";

export class Plane {
  private seats: Seat[] = [];
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

  assignPassengerSeat(seatNumber: string, passenger: Passenger) {
    this.seats.forEach((seat) => {
      if (seat.seatInfo().seatNumber.toLowerCase() === seatNumber) {
        seat.assignToSeat(passenger);
      }
    });
  }

  planeInfo() {
    return {
      serial: this.serialNumber,
      seats: this.seats,
    };
  }
}

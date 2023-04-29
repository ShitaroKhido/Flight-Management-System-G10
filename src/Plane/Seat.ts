import { SeatType } from "../Enums/SeatType";
import { Passenger } from "../Peoples/Passenger";

export class Seat {
  private passenger: Passenger | undefined;
  constructor(
    private seatNumber: string,
    private seatType: SeatType = SeatType.Economy
  ) {}
  getSeatNumber() {
    return this.seatNumber;
  }
  assignSeat(passenger: Passenger) {
    this.passenger = passenger;
  }
  passengerStatus() {
    return this.passenger !== undefined
      ? { passenger: this.passenger, status: true }
      : { passenger: this.passenger, status: false };
  }
}

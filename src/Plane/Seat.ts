import { SeatType } from "../Enums/SeatType";
import { Passenger } from "../Peoples/Passenger";

export class Seat {
  private passenger: Passenger | undefined;
  constructor(
    private seatNumber: string,
    private seatType: SeatType = SeatType.Economy
  ) {}
  seatInfo() {
    return {
      seatNumber: this.seatNumber,
      seatType: this.seatType,
      passenger: this.passenger,
    };
  }

  assignToSeat(passenger: Passenger) {
    this.passenger = passenger;
  }
}

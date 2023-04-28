import { SeatType } from "../Enums/SeatType";

export class Seat {
  constructor(private seatNumber: string, private seatType: SeatType = SeatType.Economy) {}
}
 
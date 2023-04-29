import { Flight } from "../Flights/Flight";

export class BoardingPass {
  constructor(
    private subReferenceNumber: string,
    private seatNumber: string,
    private passengerFlight: Flight
  ) {}
}

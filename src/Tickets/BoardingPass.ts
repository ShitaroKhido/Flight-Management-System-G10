import { Flight } from "../Flights/Flight";

export class BoardingPass {

    constructor(private subReferenceNumber: number,private seatNumber: number, private passengerFlight: Flight){
        this.seatNumber = seatNumber;
        this.subReferenceNumber = subReferenceNumber;
        this.passengerFlight = passengerFlight;
    }
}
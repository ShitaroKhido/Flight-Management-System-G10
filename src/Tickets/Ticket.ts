import { BoardingPass } from "./BoardingPass";

export class Ticket {
    private boardingTickets: BoardingPass[] = [];
    
    constructor(protected masterReferenceNumber: number){
        this.masterReferenceNumber = masterReferenceNumber;
    }
}
export class BoardingPass {
    constructor(private subReferenceNumber: number,private seatNumber: number){
        this.seatNumber = seatNumber;
        this.subReferenceNumber = subReferenceNumber;
    }
}
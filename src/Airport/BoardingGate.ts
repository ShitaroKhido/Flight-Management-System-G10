export class BoardingGate {
    constructor(private gateNumber: number, private dockedPlane: Plane){
        this.gateNumber = gateNumber;
        this.dockedPlane = dockedPlane;
    }
}
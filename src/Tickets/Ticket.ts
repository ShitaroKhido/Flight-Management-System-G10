import { BoardingPass } from "./BoardingPass";

export class Ticket {
  private boardingPasses: BoardingPass[] = [];
  constructor(protected masterReferenceNumber: string) {}

  private generateSubReferenceNumber(masterReferenceNumber: string): string {
    return "";
  }

  generateBoardingPass(selectedSeatsNumber: string[]) {
    selectedSeatsNumber.forEach((seatNumber) => {
      this.boardingPasses.push(
        new BoardingPass(
          this.generateSubReferenceNumber(this.masterReferenceNumber),
          seatNumber
        )
      );
    });
  }

  getBoardingPasses(): BoardingPass[] {
    return this.boardingPasses;
  }
}

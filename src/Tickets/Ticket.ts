import { BoardingPass } from "./BoardingPass";

export class Ticket {
  private boardingPasses: BoardingPass[] = [];
  constructor(protected masterReferenceNumber: number) {}

  private generateSubReferenceNumber(masterReferenceNumber: string): string {
    return "";
  }

  generateBoardingPass(
    masterReferenceNumber: string,
    selectedSeatsNumber: string[]
  ) {
    selectedSeatsNumber.forEach((seatNumber) => {
      this.boardingPasses.push(
        new BoardingPass(
          this.generateSubReferenceNumber(masterReferenceNumber),
          seatNumber
        )
      );
    });
  }
}

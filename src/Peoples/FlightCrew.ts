import { CoPilot } from "./CoPilot";
import { FlightAttendant } from "./FlightAttendant";
import { Pilot } from "./Pilot";

export class FlightCrew {
    private mainPilot: Pilot | undefined;
    private coPilot: CoPilot | undefined;
    private flightAttendes: FlightAttendant[] = [];

    addflightAttendant(FlightAttendant: FlightAttendant){
        this.flightAttendes.push(FlightAttendant);
    }
}
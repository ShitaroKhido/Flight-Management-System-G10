import { FlightType } from "../Enums/FlightType";
import { FlightCrew } from "../Peoples/FlightCrew";
import { Plane } from "../Plane/Plane";
import { FlightSchedule } from "./FlightSchedule";
export class Flight {
    private planes: Plane | undefined;
    private flightCrew: FlightCrew | undefined;
    constructor(private flightType: FlightType) {
    }

    assignPlane(plane: Plane) {
        this.planes = plane;
    }
    unassignPlane() {
        this.planes = undefined;
    }
    assignFlightCrew(flightCrew: FlightCrew) {
        this.flightCrew = flightCrew;
    }
    unassignFlightCrew() {
        this.flightCrew = undefined;
    }

}
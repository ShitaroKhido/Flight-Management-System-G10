import { FlightType } from "../Enums/FlightType";
import { FlightCrew } from "../Peoples/FlightCrew";
import { Plane } from "../Plane/Plane";
import { FlightSchedule } from "./FlightSchedule";
export class Flight{
    private flightType: FlightType;
    private plane: Plane;
    private flightCrews: FlightCrew;
    private schedules: FlightSchedule[] = [];

    constructor(flightType: FlightType, plane: Plane, flightCrews: FlightCrew){
        this.flightType = flightType;
        this.plane= plane;
        this.flightCrews = flightCrews;
    }

}
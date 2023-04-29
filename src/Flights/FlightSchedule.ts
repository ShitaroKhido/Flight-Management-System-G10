import { FlightRoute } from "./FlightRoute";
export class FlightSchedule{
    private departureTime: Date;
    private arrivalTime: Date;
    private routes: FlightRoute[] = [];

    constructor(departureTime: Date, arrivalTime: Date){
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }

}



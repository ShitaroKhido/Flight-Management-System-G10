import { FlightRoute } from "../Flights/FlightSchedule";

export class Airline{
    private aviableRoutes: FlightRoute[]= [];
    
    constructor(private name:string){
        this.name = name;
    }
}
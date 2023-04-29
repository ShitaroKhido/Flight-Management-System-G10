import { FlightRoute } from "../Flights/FlightRoute";

export class Airline{
    private aviableRoutes: FlightRoute[]= [];

    constructor(private name:string){
        this.name = name;
    }
}
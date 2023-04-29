import { FlightType } from "../Enums/FlightType";

export class Flight{
    private flightType: FlightType;
    
    constructor(flightType: FlightType){
        this.flightType = flightType;
    }

}
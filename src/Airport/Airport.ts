import { BoardingPass } from "../Tickets/BoardingPass";
import { Airline } from "./Airline";

export class Airport{
    private gates: BoardingPass[] = [];
    private airlines: Airline[]= [];
    
    constructor(private name: string, private country: string, private city: string){
        this.name = name;
        this.city = city;
        this.country = country;
    }
}
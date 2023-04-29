import { Belonging } from "../Items/Belonging";
import { Meal } from "../Items/Meal";
import { FrequentFlyer } from "../Tickets/FrequentFlyer";
import { Person } from "./Person";

export class Passenger extends Person{
    private belongings: Belonging[]= [];
    
    constructor(firstName:string, lastName:string, height: number, weight: number,private passengerMeal: Meal,private flyerPoints: FrequentFlyer){
        super(firstName, lastName, height, weight)
        this.passengerMeal = passengerMeal;
        this.flyerPoints = flyerPoints;
    }
}
import { Person } from "./Person";

export class Passenger extends Person{
    constructor(firstName:string, lastName:string, height: number, weight: number){
        super(firstName, lastName, height, weight)
    }
}
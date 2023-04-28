import { Employee } from "./Employee";

export class FlightCrew extends Employee{
    constructor(firtName: string, lastName: string, height: number, weight: number, yearOfExperiences: number, skillBased: Skills){
        super(firtName, lastName, height, weight, yearOfExperiences, skillBased)
    }
}
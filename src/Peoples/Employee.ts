import { Person } from "./Person";

export class Employee extends Person{
    private skillBased: Skills;
    private yearOfExperiences: number;
    constructor(firstName:string, lastName:string, height: number, weight: number, yearOfExperiences: number, skillBased: Skills){
        super(firstName, lastName, height, weight);
        this.yearOfExperiences = yearOfExperiences;
        this.skillBased = skillBased;
    }
}
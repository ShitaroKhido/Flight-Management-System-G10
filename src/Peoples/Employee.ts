import { EmployeeSkill } from "../Enums/EmployeeSkill";
import { Person } from "./Person";

export class Employee extends Person{
    private skillBased: EmployeeSkill;
    private yearOfExperiences: number;
    constructor(firstName:string, lastName:string, height: number, weight: number, yearOfExperiences: number, skillBased: EmployeeSkill){
        super(firstName, lastName, height, weight);
        this.yearOfExperiences = yearOfExperiences;
        this.skillBased = skillBased;
    }
}
export abstract class Person {
    constructor(protected firstName: string, protected lastName: string, protected hieght: number, protected weight: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.hieght = hieght;
        this.weight = weight;
    }
}
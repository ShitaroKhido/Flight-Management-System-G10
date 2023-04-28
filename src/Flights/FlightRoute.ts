export class FlightSchedule{
    private departureTime: Date;
    private arrivalTime: Date;

    constructor(departureTime: Date, arrivalTime: Date){
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }

}
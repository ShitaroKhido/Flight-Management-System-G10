# BASIC FLIGHT MANAGEMENT SYSTEM
GROUP  : 20             \
SUBJECT : OOP Concept    

## CONTEXT ABOUT CLASSES
### Contents
- [Airline](#Airline)
- [Flights](#Flights)
- [Items](#Items)
- [Peoples](#Peoples)
- [Tickets](#Tickets)
- [Plane](#Plane)

### Airline
Airline section is where we contain all the related classes that related to the airline, most these classes were being used as the central system which is where the process of booking will be happens here.
- Airline
- Airport 
- BoardingGate
### Flights
Flight section contained classes that are mainly focus on the process of flgiht route and destination included schedule. Although for each flight will be assigned by one crew and many schedules.
- Flight
- FlightSchedule
- FlightRoute
### Items
Items is the abstracted class that are being used to modeling the passenger item. For example, passenger belonging (Backpack, Luggage,...etc), Meal and any other possible item that are being loaded to the plane cargo.
- Belonging
- Item
- Meal
### Peoples
Peoples section contained a class called Person, which is an abstract class that are being used to create the Person object like Passenger and Employee object.
- Person
- CoPilot 
- Pilot
- FlightAttendant
- Employee
- Passenger
### Tickets
Tickets section contained classes that are being use for the flight booking between airline and passenger. Although, these classes contain all the user info included flight info.
- BoardingPass
- FrequentFyler
- Ticket
### Plane
Plane the main ojects for the aireoplane.
- Plane
- Seat
### Enums
Enums section contained all the enum for each related classes.
- EmployeeSkill
- SeatType
- ItemCategory
- MealType
- FlightType

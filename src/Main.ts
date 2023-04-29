import { Airline } from "./Airport/Airline";
import { Airport } from "./Airport/Airport";
import { MealType } from "./Enums/MealType";
import { Meal } from "./Items/Meal";
import { Passenger } from "./Peoples/Passenger";
import { PlanInfo } from "./Plane/Plane";
import { FrequentFlyer } from "./Tickets/FrequentFlyer";

// Declare Airport Object:
const phnomPenhAirport = new Airport(
  "Phnom Penh Internation Airport",
  "Cambodia",
  "Phnom Penh"
);

const ukrainAirport = new Airport(
  "Ukrain Internation Airport",
  "Ukrain",
  "Kyiv"
);
// Declare BoardingGate Object:
phnomPenhAirport.assignBoardinGates(10);
// Declare Arlines Object:
const cambodiaAirline = new Airline("Cambodia Airline");
const ukrainAirline = new Airline("Unkrain Airline");
// Declare list of plane info:
const listOfPlaneInfo: PlanInfo[] = [
  { serialNumber: "AWS-123", numberOfSeat: 120 },
  { serialNumber: "DDS-233", numberOfSeat: 130 },
  { serialNumber: "AUS-912", numberOfSeat: 110 },
];

cambodiaAirline.registerPlane(listOfPlaneInfo);
cambodiaAirline.addFlightRoute(ukrainAirport);
// Main Code:
phnomPenhAirport.registerAirline(cambodiaAirline);
phnomPenhAirport.registerAirline(ukrainAirline);

ukrainAirport.registerAirline(cambodiaAirline);
ukrainAirport.registerAirline(ukrainAirline);

// Ouput
// console.log(phnomPenhAirport);
// console.log(cambodiaAirline.getPlaneWithSerial("DDS-233"));

const p = new Passenger(
  "J",
  "Junior",
  2,
  150,
  new Meal("Chicken", 0.3, MealType.DairyFree),
  new FrequentFlyer(12, 12)
);

cambodiaAirline.bookingFlight(p, "Ukrain");

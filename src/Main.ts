import { Airline } from "./Airport/Airline";
import { Airport } from "./Airport/Airport";
import { BoardingGate } from "./Airport/BoardingGate";

// Declare Airport Object:
const phnomPenhAirport = new Airport(
  "Phnom Penh Internation Airport",
  "Cambodia",
  "Phnom Penh"
);
// Declare BoardingGate Object:
phnomPenhAirport.assignBoardinGates(10);
// Declare Arlines Object:
const cambodiaAirline = new Airline("Cambodia Airline");
const ukrainAirline = new Airline("Unkrain Airline");

// Main Code:
phnomPenhAirport.registerAirline(cambodiaAirline);
phnomPenhAirport.registerAirline(ukrainAirline);

// Ouput
console.log(phnomPenhAirport);

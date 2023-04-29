// Main file

import { Airline } from "./Airport/Airline";
import { Airport } from "./Airport/Airport";

// Declare Airport:
const cambodiaAirport = new Airport(
  "Phnom Penh International Airport",
  "Cambodia",
  "Phnom Penh"
);

const ukrainAirport = new Airport(
  "Kyiv International Airport",
  "Ukrain",
  "Kyiv"
);

// Declare Airline:
const cambodiaAirline = new Airline("Angkor Airline");
const ukrainAirline = new Airline("Kyiv Airline");

cambodiaAirport.registerAirline(cambodiaAirline);
cambodiaAirport.registerAirline(ukrainAirline);

ukrainAirport.registerAirline(cambodiaAirline);
ukrainAirport.registerAirline(ukrainAirline);

// Register Plane to each airline:
const listOfPlaneInfo = [
  { serial: "AWE-23", numberOfSeat: 120 },
  { serial: "WER-345", numberOfSeat: 120 },
  { serial: "GHJ-43", numberOfSeat: 120 },
];

listOfPlaneInfo.forEach((info) => {
  cambodiaAirline.registerPlane(info.serial, info.numberOfSeat);
});

// Logs:
console.log(cambodiaAirport.getAirlines());
console.log(ukrainAirport.getAirlines());

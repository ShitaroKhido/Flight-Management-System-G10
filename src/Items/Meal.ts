import { MealType } from "../Enums/MealType";
import { Item } from "./Item";

export class Meal extends Item {
  constructor(name: string, weight: number, private category: MealType) {
    super(name, weight);
  }
}

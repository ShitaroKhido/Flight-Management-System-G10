import { ItemCategory } from "../Enums/ItemCategory";
import { Item } from "./Item";

export class Belonging extends Item {
  constructor(name: string, weight: number, private category: ItemCategory) {
    super(name, weight);
  }
}

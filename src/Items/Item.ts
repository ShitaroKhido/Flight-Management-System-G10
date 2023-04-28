export abstract class Item {
  constructor(protected itemName: string, protected weight: number) {}
  itemInfo() {
    return {
      name: this.itemName,
      weight: this.weight,
    };
  }
}

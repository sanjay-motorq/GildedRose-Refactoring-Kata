import { Factory } from "./factories/factory"
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }
  
  updateQuality() {
    for (let item of this.items) {
      item = new Factory(item).updateQuality();
    }
    return this.items;
  }
}

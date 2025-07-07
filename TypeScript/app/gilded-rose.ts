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

  // increaseQualityCapToFifty(quality: number, toIncrease: number) {
  //   quality += toIncrease;
  //   quality = Math.min(quality, 50);
  //   return quality;
  // }

  // decreaseQualityFloorToZero(quality: number, toDecrease: number) {
  //   quality -= toDecrease;
  //   quality = Math.max(quality, 0);
  //   return quality;
  // }

  // isUnknown(name: string) {
  //   return !Object.values<string>(ItemName).includes(name)
  // }

  updateQuality() {
    for (let item of this.items) {
      item = new Factory(item).updateQuality();
    }
    return this.items;
  }
}

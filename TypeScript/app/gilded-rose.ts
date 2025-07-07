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

export enum ItemName {
  AgedBrie = 'Aged Brie',
  BackstagePasses = 'Backstage passes to a TAFKAL80ETC concert',
  Sulfuras = 'Sulfuras, Hand of Ragnaros'
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  increaseQualityCapToFifty(quality: number, toIncrease: number) {
    quality += toIncrease;
    quality = Math.min(quality, 50);
    return quality;
  }

  decreaseQualityFloorToZero(quality: number, toDecrease: number) {
    quality -= toDecrease;
    quality = Math.max(quality, 0);
    return quality;
  }

  updateQuality() {
    for (let item of this.items) {
      if (item.name != ItemName.AgedBrie && item.name != ItemName.BackstagePasses) {
        if (item.quality > 0) {
          if (item.name != ItemName.Sulfuras) {
            item.quality = this.decreaseQualityFloorToZero(item.quality, 1);
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
          if (item.name == ItemName.BackstagePasses) {
            if (item.sellIn < 11) {
              item.quality = this.increaseQualityCapToFifty(item.quality, 1);
            }
            if (item.sellIn < 6) {
              item.quality = this.increaseQualityCapToFifty(item.quality, 1);
            }
          }
        }
      }
      if (item.name != ItemName.Sulfuras) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != ItemName.AgedBrie) {
          if (item.name != ItemName.BackstagePasses) {
            if (item.quality > 0) {
              if (item.name != ItemName.Sulfuras) {
                item.quality = this.decreaseQualityFloorToZero(item.quality, 1);
              }
            }
          } else {
            item.quality = 0;
          }
        } else {
          item.quality = this.increaseQualityCapToFifty(item.quality, 1);
        }
      }
    }

    return this.items;
  }
}

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

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let quality = this.items[i].quality;
      let name = this.items[i].name;
      let sellIn = this.items[i].sellIn;
      if (name != ItemName.AgedBrie && name != ItemName.BackstagePasses) {
        if (quality > 0) {
          if (name != ItemName.Sulfuras) {
            quality = quality - 1
          }
        }
      } else {
        if (quality < 50) {
          quality = quality + 1
          if (name == ItemName.BackstagePasses) {
            if (sellIn < 11) {
              if (quality < 50) {
                quality = quality + 1
              }
            }
            if (sellIn < 6) {
              if (quality < 50) {
                quality = quality + 1
              }
            }
          }
        }
      }
      if (name != ItemName.Sulfuras) {
        sellIn = sellIn - 1;
      }
      if (sellIn < 0) {
        if (name != ItemName.AgedBrie) {
          if (name != ItemName.BackstagePasses) {
            if (quality > 0) {
              if (name != ItemName.Sulfuras) {
                quality = quality - 1
              }
            }
          } else {
            quality = quality - quality
          }
        } else {
          if (quality < 50) {
            quality = quality + 1
          }
        }
      }
      this.items[i].name = name;
      this.items[i].quality = quality;
      this.items[i].sellIn = sellIn;
    }

    return this.items;
  }
}

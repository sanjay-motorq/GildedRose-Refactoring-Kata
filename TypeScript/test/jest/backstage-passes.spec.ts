import { Item, GildedRose } from '@/gilded-rose';

describe('Backstage passes', () => {
  it('Increases in quality by 1 when sellIn > 10 days', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  })
  it('Increases in quality by 2 when sellIn <= 10 days', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  })
  it('Increases in quality by 3 when sellIn <= 5 days', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  })
  it('Quality drops to 0 when sellIn <= 0 days :1 ', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  })
  it('Quality drops to 0 when sellIn <= 0 days :2', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  })
});
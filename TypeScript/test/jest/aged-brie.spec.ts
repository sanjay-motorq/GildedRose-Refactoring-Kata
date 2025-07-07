import { Item, GildedRose } from '@/gilded-rose';

describe('Aged Brie', () => {
  it('Increases in Quality', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  })
  it('Doesnt go above 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 8, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  })

  it('Sellin Expired', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  })
});
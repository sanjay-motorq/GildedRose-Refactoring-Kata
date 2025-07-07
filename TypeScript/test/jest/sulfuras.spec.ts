import { Item, GildedRose } from '@/gilded-rose';

describe('Sulfuras', () => {
  it('Quality doesnt change', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80), new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[1].quality).toBe(80);
  })
});
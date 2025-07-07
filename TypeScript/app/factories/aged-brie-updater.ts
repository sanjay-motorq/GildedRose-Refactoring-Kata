import { Item } from "../gilded-rose";

export class AgedBrieUpdater {
    private item: Item;
    constructor(item: Item) {
        this.item = item;
    }
    private increaseQuality() {
        let quality = this.item.quality;
        if(this.item.sellIn <= 0) quality += 2;
        else quality += 1;
        this.item.quality = Math.min(quality, 50);
    }
    private decreaseSellIn() {
        this.item.sellIn -= 1;
    }
    public updateQuality() {
        this.increaseQuality();
        this.decreaseSellIn();
        return this.item;
    }
}
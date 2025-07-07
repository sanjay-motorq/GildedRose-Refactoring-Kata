import { Item } from "../gilded-rose";

export class BackstagePassUpdater {
    private item: Item;
    constructor(item: Item) {
        this.item = item;
    }
    increaseQuality() {
        const sellIn = this.item.sellIn;
        let quality = this.item.quality;
        if(sellIn <= 0) {
            quality = 0;
        }
        else if(sellIn <= 5) {
            quality += 3;
        }
        else if(sellIn <= 10) {
            quality += 2;
        }
        else {
            quality += 1;
        }
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
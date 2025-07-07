import { Item } from "../gilded-rose";

export class Conjured {
    private item: Item;
    constructor(item: Item) {
        this.item = item;
    }
    decreaseQuality() {
        let quality = this.item.quality;
        if(this.item.sellIn <= 0) quality -= 4;
        else quality -= 2;
        this.item.quality = Math.max(quality, 0);
    }
    decreaseSellIn() {
        this.item.sellIn -= 1;
    }
    public updateQuality() {
        this.decreaseQuality();
        this.decreaseSellIn();
        return this.item;
    }
}
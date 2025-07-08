import { Item } from "../gilded-rose";
import { Updater } from "./updater";
import { QUALITY_LOWER_BOUND } from "../constants";

export class DefaultUpdater implements Updater {
    private decreaseQuality(item: Item) {
        let quality = item.quality;
        if(item.sellIn <= 0) quality -= 2;
        else quality -= 1;
        item.quality = Math.max(quality, QUALITY_LOWER_BOUND);
    }
    private decreaseSellIn(item: Item) {
        item.sellIn -= 1;
    }
    public updateQuality(item: Item) {
        this.decreaseQuality(item);
        this.decreaseSellIn(item);
        return item;
    }
}
import { Item } from "../gilded-rose";
import { Updater } from "./updater";
import { QUALITY_UPPER_BOUND } from "../constants";

export class BackstagePassUpdater implements Updater {
    private increaseQuality(item: Item) {
        const sellIn = item.sellIn;
        if(sellIn <= 0) {
            item.quality = 0;
        }
        else if(sellIn <= 5) {
            item.quality += 3;
        }
        else if(sellIn <= 10) {
            item.quality += 2;
        }
        else {
            item.quality += 1;
        }
        item.quality = Math.min(item.quality, QUALITY_UPPER_BOUND);
    }
    private decreaseSellIn(item: Item) {
        item.sellIn -= 1;
    }
    public updateQuality(item: Item) {
        this.increaseQuality(item);
        this.decreaseSellIn(item);
        return item;
    }
}
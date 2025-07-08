import { Item } from "../gilded-rose";
import { Updater } from "./updater";
import { QUALITY_UPPER_BOUND } from "../constants";

export class AgedBrieUpdater implements Updater {
    private increaseQuality(item: Item) {
        if(item.sellIn <= 0) item.quality += 2;
        else item.quality += 1;
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
import { Item } from "../gilded-rose";
import { Updater } from "./updater";
import { QUALITY_LOWER_BOUND } from "../constants";

export class ConjuredUpdater implements Updater {
    private decreaseQuality(item: Item) {
        if(item.sellIn <= 0) item.quality -= 4;
        else item.quality -= 2;
        item.quality = Math.max(item.quality, QUALITY_LOWER_BOUND);
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
import { Item } from "../gilded-rose";
import { Updater } from "./updater";

export class ConjuredUpdater implements Updater {
    decreaseQuality(item: Item) {
        if(item.sellIn <= 0) item.quality -= 4;
        else item.quality -= 2;
        item.quality = Math.max(item.quality, 0);
    }
    decreaseSellIn(item: Item) {
        item.sellIn -= 1;
    }
    public updateQuality(item: Item) {
        this.decreaseQuality(item);
        this.decreaseSellIn(item);
        return item;
    }
}
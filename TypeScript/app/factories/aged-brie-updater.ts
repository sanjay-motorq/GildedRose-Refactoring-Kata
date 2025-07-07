import { Item } from "../gilded-rose";
import { Updater } from "./updater";

export class AgedBrieUpdater implements Updater {
    private increaseQuality(item: Item) {
        if(item.sellIn <= 0) item.quality += 2;
        else item.quality += 1;
        item.quality = Math.min(item.quality, 50);
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
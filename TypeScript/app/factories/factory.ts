import { AgedBrieUpdater } from "./aged-brie-updater";
import { Item } from "../gilded-rose";
import { ItemName } from "../enum";
import { BackstagePassUpdater } from "./backstage-pass-updater";
import { SulfuraUpdater } from "./sulfura-updater";
import { ConjuredUpdater } from "./conjured-updater";
import { DefaultUpdater } from "./default-updater";

export class Factory {
    private item: Item;
    constructor(item: Item) {
        this.item = item;
    }
    updateQuality() {
        if(this.item.name == ItemName.AgedBrie) {
            return new AgedBrieUpdater().updateQuality(this.item);
        }
        else if(this.item.name == ItemName.BackstagePasses) {
            return new BackstagePassUpdater().updateQuality(this.item);
        }
        else if(this.item.name == ItemName.Sulfuras) {
            return new SulfuraUpdater().updateQuality(this.item);
        }
        // else if(this.item.name == ItemName.Conjured) {
        //     return new ConjuredUpdater().updateQuality(this.item);
        // }
        else {
            return new DefaultUpdater().updateQuality(this.item);
        }
    }
}
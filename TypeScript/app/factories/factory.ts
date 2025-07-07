import { AgedBrieUpdater } from "./aged-brie-updater";
import { Item } from "../gilded-rose";
import { ItemName } from "../enum";
import { BackstagePassUpdater } from "./backstage-pass-updater";
import { SulfuraUpdater } from "./sulfura-updater";
import { ConjuredUpdater } from "./conjured-updater";
import { DefaultItemUpdater } from "./default-item-updater";

export class Factory {
    private item: Item;
    constructor(item: Item) {
        this.item = item;
    }
    updateQuality() {
        if(this.item.name == ItemName.AgedBrie) {
            return new AgedBrieUpdater(this.item).updateQuality();
        }
        else if(this.item.name == ItemName.BackstagePasses) {
            return new BackstagePassUpdater(this.item).updateQuality();
        }
        else if(this.item.name == ItemName.Sulfuras) {
            return new SulfuraUpdater(this.item).updateQuality();
        }
        // else if(this.item.name == ItemName.Conjured) {
        //     return new ConjuredUpdater(this.item).updateQuality();
        // }
        else {
            return new DefaultItemUpdater(this.item).updateQuality();
        }
    }
}
import { AgedBrie } from "./aged-brie";
import { Item } from "../gilded-rose";
import { ItemName } from "../enum";
import { BackstagePass } from "./backstage-pass";
import { Sulfura } from "./sulfura";
import { Conjured } from "./conjured";
import { DefaultItem } from "./defaultitem";

export class Factory {
    private item: Item;
    constructor(item) {
        this.item = item;
    }
    updateQuality() {
        if(this.item.name == ItemName.AgedBrie) {
            return new AgedBrie(this.item).updateQuality();
        }
        else if(this.item.name == ItemName.BackstagePasses) {
            return new BackstagePass(this.item).updateQuality();
        }
        else if(this.item.name == ItemName.Sulfuras) {
            return new Sulfura(this.item).updateQuality();
        }
        else if(this.item.name == ItemName.Conjured) {
            return new Conjured(this.item).updateQuality();
        }
        else {
            return new DefaultItem(this.item).updateQuality();
        }
    }
}
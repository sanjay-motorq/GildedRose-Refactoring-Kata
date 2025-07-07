import { Item } from "../gilded-rose";

export interface Updater {
    updateQuality(item: Item): Item;
}
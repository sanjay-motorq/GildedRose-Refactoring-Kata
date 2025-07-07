import { Item } from "../gilded-rose";
import { Updater } from "./updater";

export class SulfuraUpdater implements Updater {
    public updateQuality(item: Item) {
        return item;
    }
}
import { Item } from "../gilded-rose";

export class SulfuraUpdater {
    private item: Item;
    constructor(item: Item) {
        this.item = item;
    }
    public updateQuality() {
        return this.item;
    }
}
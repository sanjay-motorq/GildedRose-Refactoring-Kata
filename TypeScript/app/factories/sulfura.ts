import { Item } from "../gilded-rose";

export class Sulfura {
    private item: Item;
    constructor(item: Item) {
        this.item = item;
    }
    public updateQuality() {
        return this.item;
    }
}
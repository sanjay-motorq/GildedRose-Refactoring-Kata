import { Item } from "../gilded-rose";

export class BackstagePass {
    private item: Item;
    constructor(item) {
        this.item = item;
    }
    public updateQuality() {
        return this.item;
    }
}
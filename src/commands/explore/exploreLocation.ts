import { ITEM_CARDS, Card, Creature, SignSet, Molar } from "./cards/itemCard"
import { CREATURE_TABLE, ITEM_TYPES_TABLE, MOLAR_TABLE, SIGNSET_TABLE } from "./cards/itemLootTables";
import { IItemType, ILocationWeights, ILootTable } from "./types/Interfaces";
import { ItemType, LocationName } from "./types/Types";

export class ExploreLocation {
    location: LocationName

    constructor(location: LocationName) {
        this.location = location
    }

    public explore() {
        const itemTypeFound: ItemType = this.getItemFound(ITEM_TYPES_TABLE).type
        if(itemTypeFound === "Creature") {
            return this.getWeightedItem(CREATURE_TABLE)
        } else if(itemTypeFound === "Sign Set"){
            return this.getWeightedItem(SIGNSET_TABLE)
        } else if(itemTypeFound === "Molar") {
            return this.getWeightedItem(MOLAR_TABLE)
        }
    }


    private getWeightedItem(itemCards: ILootTable[]) {
        const random = Math.random() * itemCards.reduce(
            (acc, current) => acc + (current.weights[this.location] ?? 0), 0)

        let cumulativeWeight = 0;
        for (const item of itemCards) {
            cumulativeWeight += item?.weights[this.location] ?? 0
            if (random <= cumulativeWeight) {
                return item;
            }
        }
        return itemCards[0];
    }

    private getItemFound(items: any[]) {
        let random = Math.random() * items.reduce(
            (acc, current) => acc + current.weight, 0);

        let cumulativeWeight = 0;
        for (const item of items) {
            cumulativeWeight += item.weight;
            if (random <= cumulativeWeight) {
                return item;
            }
        }
        return items[0];
    }
}
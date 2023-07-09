import { CreatureName, ItemName, ItemType, LocationName, SignSetName } from "./Types"

export type ILocationWeights = Partial<Record<LocationName, number>>

export interface IUserProfile {
    id: string
    collection: {
        creature_cards: Record<CreatureName, ICreatureCard>
        sign_sets: SignSetName[]
    }
    milk_molars: number
    gold_milk_molars: number
}

export interface ICreatureCard {
    gold_cards: number
    kills: number
}

export interface IItemType {
    type: ItemType
    weight: number
}

export interface ILootTable {
    name: ItemName
    weights: ILocationWeights
}
import { ILootTable } from "../types/Interfaces"

const aphid = grasslands(100, 100, 100, 100, 100)
const weevil = grasslands(100, 100, 100, 100, 100)
const redWorkerAnt = grasslands(100, 100, 100, 100, 100)

const signset_up = grasslands(100, 100, 100, 100, 100)
const signset_down = grasslands(100, 100, 100, 100, 100)
const signset_left = grasslands(100, 100, 100, 100, 100)
const signset_right = grasslands(100, 100, 100, 100, 100)

const milkMolar     = grasslands(90, 90, 90, 90, 90)
const goldMilkMolar = grasslands(10, 10, 10, 10, 10)

export const ITEM_TYPES_TABLE = [
    { type: "Creature", weight: 95 },
    { type: "Sign Set", weight: 4 },
    { type: "Molar",    weight: 1 },
]

export const CREATURE_TABLE: ILootTable[] = [
    { name: "Aphid", weights: aphid },
    { name: "Weevil", weights: weevil },
    { name: "Red Worker Ant", weights: redWorkerAnt },
]

export const SIGNSET_TABLE: ILootTable[] = [
    { name: "Up", weights: signset_up },
    { name: "Down", weights: signset_down },
    { name: "Left", weights: signset_left },
    { name: "Right", weights: signset_right },
]

export const MOLAR_TABLE: ILootTable[] = [
    { name: "Milk Molar", weights: milkMolar },
    { name: "Gold Milk Molar", weights: goldMilkMolar },
]

function grasslands(central: number, north: number, south: number, west: number, east: number) {
    return {
        "Central Grasslands": central,
        "North Grasslands": north,
        "South Grasslands": south,
        "West Grasslands": west,
        "East Grasslands": east,        
    }
}
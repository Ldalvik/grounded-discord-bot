import { ILocationWeights, ILootTable } from "../types/Interfaces"
import { ItemName, LocationName, ItemType, CreatureName, SignSetName, MolarName } from "../types/Types"
import { CREATURE_TABLE, SIGNSET_TABLE, MOLAR_TABLE } from "./itemLootTables"

export interface Card {
  name: ItemName
  home: LocationName
  type?: ItemType
  weights: ILocationWeights
}

export class Creature implements Card {
  weights: Partial<Record<LocationName, number>>
  constructor(public name: CreatureName, public home: LocationName, public type: ItemType = "Creature") {
      this.weights = CREATURE_TABLE.find((item) => item.name === name)?.weights || {}
    }
}

export class SignSet implements Card {
  weights: Partial<Record<LocationName, number>>
  constructor(public name: SignSetName, public home: LocationName, public type: ItemType = "Sign Set") {
    this.weights = SIGNSET_TABLE.find((item) => item.name === name)?.weights || {}
  }
}

export class Molar implements Card {
  weights: Partial<Record<LocationName, number>>
  constructor(public name: MolarName, public home: LocationName, public type: ItemType = "Molar") {
    this.weights = MOLAR_TABLE.find((item) => item.name === name)?.weights || {}
  }
}

export function getPercentChance(lootTable: any, itemName: ItemName, location: LocationName) {
  const weight = lootTable.find((item: any) => item.name === itemName)?.weights[location] || 0
  const totalWeight = lootTable.reduce((acc: any, current: any) => acc + (current?.weights[location] || 0), 0)
  return (weight / totalWeight) * 100
}

const creatureList = [
  new Creature('Aphid','Central Grasslands'),
  new Creature('Weevil','Central Grasslands'),
  new Creature('Red Worker Ant','Central Grasslands')
]

const signSetList = [
  new SignSet('Up','Central Grasslands'),
  new SignSet('Down','Central Grasslands'),
  new SignSet('Left','Central Grasslands'),
  new SignSet('Right','Central Grasslands')
]

const molarList = [
  new Molar('Milk Molar','Molar Bottle'),
  new Molar('Gold Milk Molar','Molar Bottle')
]

export const ITEM_CARDS = {
  "Creature": creatureList, 
  "Sign Set": signSetList, 
  "Molar": molarList
}

import { ExploreLocation } from "./exploreLocation"
import { LocationName } from "./types/Types"

const location: LocationName = "Central Grasslands"
const explore = new ExploreLocation(location)

let a = []
for(let i = 0; i < 50; i++) {
    a.push(explore.explore()?.name)
}

console.log(a)
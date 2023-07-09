import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { ExploreLocation } from "./exploreLocation";
import { CreatureName, LocationName } from "./types/Types";

export const data = new SlashCommandBuilder()
	.setName('explore')
	.setDescription('See what you get!')
	
export async function execute(interaction: any) {
    
}

function getRandomItem() {
    // location to explore
    // 
    const location: LocationName = "Central Grasslands"
    const explore = new ExploreLocation(location)

    const item = explore.explore()
    
}

const newCreatureCardEmbed = (creatureName: CreatureName) => {
    return new EmbedBuilder()
    //.setColor(0x0099FF)
	.setTitle(`+1 ${creatureName}`)
	.setDescription(`You caught your first ${creatureName}, now you have it's creature card! Collect it's gold card to increase your chances of getting multiple items.`)
	.setThumbnail(`../../../images/${creatureName.replace(' ', '_')}.webp`)
	.addFields(
		{ name: 'Times killed', value: '1', inline: true },
		{ name: 'Gold card\'s obtained', value: '0', inline: true },
	)
	.setFooter({ text: `Location: ${location}` });
}

// creature card
// new item card
// gold card

import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
	.setName('info')
	.setDescription('Get info')
	.addSubcommand(subcommand =>
		subcommand
			.setName('user')
			.setDescription('Info about a user')
			.addUserOption(option => option.setName('target').setDescription('The user')))
	
export async function execute(interaction: any) {
    if(interaction.options.getSubcommand() === "user") {
        interaction.options.getUser('target')
    }
}